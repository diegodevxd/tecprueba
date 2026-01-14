import zipfile
import xml.etree.ElementTree as ET
import openpyxl
import os
import re

local_filename = "resistencias_debug.xlsx"

def diagnose_missing_image():
    wb = openpyxl.load_workbook(local_filename)
    target_sheet_name = wb.sheetnames[34]
    print(f"Diagnosing sheet: '{target_sheet_name}'")

    with zipfile.ZipFile(local_filename, 'r') as z:
        with z.open('xl/workbook.xml') as f:
            root = ET.parse(f).getroot() 
            
        ns = {'m': 'http://schemas.openxmlformats.org/spreadsheetml/2006/main',
              'r': 'http://schemas.openxmlformats.org/officeDocument/2006/relationships'}
        
        sheets = root.find('m:sheets', ns)
        sheet_info = None
        for s in sheets.findall('m:sheet', ns):
            if s.get('name') == target_sheet_name:
                sheet_info = s.attrib
                break
        
        if not sheet_info:
            print("Sheet not found in XML.")
            return
            
        rId = sheet_info.get('{http://schemas.openxmlformats.org/officeDocument/2006/relationships}id')
        print(f"Sheet '{target_sheet_name}' has rId='{rId}'")
        
        with z.open('xl/_rels/workbook.xml.rels') as f:
            rels_root = ET.parse(f).getroot()
        
        ns_rels = {'rel': 'http://schemas.openxmlformats.org/package/2006/relationships'}
        target_xml = None
        for r in rels_root.findall('rel:Relationship', ns_rels):
            if r.get('Id') == rId:
                target_xml = r.get('Target')
                break
        
        print(f"Target XML: {target_xml}") 
        
        if not target_xml: return
        
        if target_xml.startswith('/'): target_path = target_xml[1:]
        else: target_path = 'xl/' + target_xml
        
        print(f"Reading {target_path}...")
        
        with z.open(target_path) as f:
            sheet_root = ET.parse(f).getroot()
            
        drawing = sheet_root.find('m:drawing', ns)
        if drawing is None:
            print("No <drawing> element found in sheet XML.")
            return
            
        drawing_rId = drawing.get('{http://schemas.openxmlformats.org/officeDocument/2006/relationships}id')
        print(f"Drawing rId: {drawing_rId}")
        
        sheet_folder = os.path.dirname(target_path)
        sheet_filename = os.path.basename(target_path)
        sheet_rels_path = f"{sheet_folder}/_rels/{sheet_filename}.rels"
        
        print(f"Reading {sheet_rels_path}...")
        try:
            with z.open(sheet_rels_path) as f:
                sheet_rels_root = ET.parse(f).getroot()
            
            drawing_path = None
            for r in sheet_rels_root.findall('rel:Relationship', ns_rels):
                if r.get('Id') == drawing_rId:
                    drawing_path = r.get('Target')
                    break
            
            print(f"Drawing Path (raw): {drawing_path}")
            if not drawing_path: return
            
            if drawing_path.startswith('../'):
                full_drawing_path = 'xl/' + drawing_path.replace('../', '')
            else:
                 full_drawing_path = 'xl/worksheets/' + drawing_path
                 
            print(f"Full Drawing Path: {full_drawing_path}")
            
            with z.open(full_drawing_path) as f:
                drawing_root = ET.parse(f).getroot()
            
            ns_dr = {'xdr': 'http://schemas.openxmlformats.org/drawingml/2006/spreadsheetDrawing',
                     'a': 'http://schemas.openxmlformats.org/drawingml/2006/main'}
            
            blips = drawing_root.findall('.//a:blip', ns_dr)
            print(f"Found {len(blips)} blips in drawing.")
            print("Root children:", [c.tag for c in drawing_root])

            if not blips:
                print("Drawing is empty of images.")
                return
                
            embed_id = blips[0].get('{http://schemas.openxmlformats.org/officeDocument/2006/relationships}embed')
            print(f"Blip embed ID: {embed_id}")
            
            drawing_folder = os.path.dirname(full_drawing_path)
            drawing_filename = os.path.basename(full_drawing_path)
            drawing_rels_path = f"{drawing_folder}/_rels/{drawing_filename}.rels"
            
            print(f"Reading {drawing_rels_path}...")
            if drawing_rels_path not in z.namelist():
                 print("Drawing RELS file does not exist! This explains why openpyxl failed.")
                 return

            with z.open(drawing_rels_path) as f:
                d_rels_root = ET.parse(f).getroot()
                
            for r in d_rels_root.findall('rel:Relationship', ns_rels):
                if r.get('Id') == embed_id:
                    print(f"IMAGE FOUND: {r.get('Target')}")
                    return

        except KeyError as e:
            print(f"File missing in zip: {e}")
            
if __name__ == "__main__":
    diagnose_missing_image()
