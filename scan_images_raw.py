import zipfile
import xml.etree.ElementTree as ET
import os

filename = "resistencias_check.xlsx"

def scan_images_raw():
    print(f"Scanning {filename} structure directly...")
    
    try:
        z = zipfile.ZipFile(filename, 'r')
    except Exception as e:
        print(f"Failed to open zip: {e}")
        return

    # 1. Parse workbook.xml to get list of sheets and their rIds
    with z.open('xl/workbook.xml') as f:
        wb_root = ET.fromstring(f.read())
        
    ns_wb = {'m': 'http://schemas.openxmlformats.org/spreadsheetml/2006/main',
             'r': 'http://schemas.openxmlformats.org/officeDocument/2006/relationships'}
             
    sheets = [] 
    # structure: (name, rId, sheetId)
    for sheet in wb_root.findall('.//m:sheet', ns_wb):
        name = sheet.get('name')
        rId = sheet.get('{http://schemas.openxmlformats.org/officeDocument/2006/relationships}id')
        sheets.append({'name': name, 'rId': rId})
        
    # 2. Parse workbook.xml.rels to map rId -> filename (e.g. "worksheets/sheet1.xml")
    with z.open('xl/_rels/workbook.xml.rels') as f:
        wb_rels_root = ET.fromstring(f.read())
        
    ns_rel = {'rel': 'http://schemas.openxmlformats.org/package/2006/relationships'}
    rId_map = {}
    for rel in wb_rels_root.findall('rel:Relationship', ns_rel):
        rId_map[rel.get('Id')] = rel.get('Target')
        
    # 3. For each sheet, find its drawing
    print(f"{'Sheet Name':<30} | {'Image Status':<15}")
    print("-" * 50)
    
    no_image_sheets = []
    
    for s in sheets:
        sheet_name = s['name']
        rId = s['rId']
        target = rId_map.get(rId)
        
        if not target:
            status = "No Sheet XML"
            no_image_sheets.append(sheet_name)
            print(f"{sheet_name:<30} | {status:<15}")
            continue
            
        # target can be "worksheets/sheet1.xml" or "/xl/worksheets/sheet1.xml"
        if target.startswith('/'): target = target[1:]
        else: target = 'xl/' + target
        
        # Parse sheet XML
        try:
            with z.open(target) as f:
                sheet_xml = f.read()
                
            sheet_root = ET.fromstring(sheet_xml)
            # Find drawing
            drawing = sheet_root.find('.//m:drawing', ns_wb)
            
            if drawing is None:
                status = "No Drawing Rel"
                no_image_sheets.append(sheet_name)
                print(f"{sheet_name:<30} | {status:<15}")
                continue
                
            drawing_rId = drawing.get('{http://schemas.openxmlformats.org/officeDocument/2006/relationships}id')
            
            # Find drawing file path from sheet rels
            sheet_dir = os.path.dirname(target)
            sheet_file = os.path.basename(target)
            sheet_rels = f"{sheet_dir}/_rels/{sheet_file}.rels"
            
            if sheet_rels not in z.namelist():
                status = "No Rels File"
                no_image_sheets.append(sheet_name)
                print(f"{sheet_name:<30} | {status:<15}")
                continue
                
            with z.open(sheet_rels) as f:
                s_rels_root = ET.fromstring(f.read())
                
            drawing_target = None
            for rel in s_rels_root.findall('rel:Relationship', ns_rel):
                if rel.get('Id') == drawing_rId:
                    drawing_target = rel.get('Target')
                    break
            
            if not drawing_target:
                status = "Broken Drw Link"
                no_image_sheets.append(sheet_name)
                print(f"{sheet_name:<30} | {status:<15}")
                continue
                
            # Normalize drawing path
            # usually "../drawings/drawing1.xml" relative to "xl/worksheets" -> "xl/drawings/drawing1.xml"
            if drawing_target.startswith('../'):
                drawing_full_path = 'xl/' + drawing_target.replace('../', '')
            else:
                 # assume weird structure? unlikely for google sheets export
                 drawing_full_path = 'xl/worksheets/' + drawing_target
            
            # Parse Drawing XML
            try:
                with z.open(drawing_full_path) as f:
                    drawing_xml_content = f.read()
                    
                # Check for "a:blip" which indicates embedded image
                # We can do simple substring check for speed and robustness
                if b'a:blip' in drawing_xml_content or b'embed=' in drawing_xml_content:
                     status = "Has Image"
                else:
                     status = "Empty Drawing"
                     no_image_sheets.append(sheet_name)
                     
            except Exception as e:
                status = f"Drw Read Err"
                no_image_sheets.append(sheet_name)

        except Exception as e:
             status = f"Sheet Read Err"
             no_image_sheets.append(sheet_name)
             
        print(f"{sheet_name:<30} | {status:<15}")

        
    print("-" * 50)
    print(f"Found {len(no_image_sheets)} sheets without images.")
    if no_image_sheets:
        print("Missing Images in these Sheets:")
        for n in no_image_sheets:
            print(f"- {n}")

if __name__ == "__main__":
    scan_images_raw()
