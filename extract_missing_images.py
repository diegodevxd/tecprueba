import openpyxl
import os
import re

local_filename = "resistencias_missing.xlsx"
output_dir = "IMAGES"
script_file = "script.js"

def sanitize_filename(name):
    # Ensure name works as a filename
    clean = re.sub(r'[\\/*?:"<>|]', "", name).replace(" ", "_").replace("Ω", "Ohm")
    return clean

def extract_and_update():
    wb = openpyxl.load_workbook(local_filename)
    sheet_names = wb.sheetnames
    
    # Range of sheets to process
    # Index 11 corresponds to ID 102
    # Index 33 corresponds to ID 124
    start_idx = 11
    end_idx = 33
    
    updates = {} # ID -> image_path

    for i in range(start_idx, end_idx + 1):
        sheet_name = sheet_names[i]
        ws = wb[sheet_name]
        pid = 91 + i
        
        print(f"Processing ID {pid}: {sheet_name}")
        
        if hasattr(ws, '_images') and ws._images:
            try:
                img = ws._images[0]
                ext = "png"
                if hasattr(img, 'format') and img.format:
                    ext = img.format.lower()
                if ext == 'jpeg': ext = 'jpg'
                
                safe_name = sanitize_filename(sheet_name.strip())
                filename = f"prod_{pid}_{safe_name}.{ext}"
                filepath = os.path.join(output_dir, filename)
                
                with open(filepath, "wb") as f:
                    f.write(img._data())
                
                rel_path = f"IMAGES/{filename}"
                updates[pid] = rel_path
                print(f"  Saved image: {rel_path}")
            except Exception as e:
                print(f"  Error saving image for {sheet_name}: {e}")
        else:
            print(f"  No image found for {sheet_name}")

    # Update script.js
    if updates:
        with open(script_file, 'r', encoding='utf-8') as f:
            content = f.read()
            
        for pid, img_path in updates.items():
            # Regex to replace image path for specific ID
            # "id": 102, ... "image": "OLD",
            # We look for "id": 102, then capture until "image": "..."
            
            # This is a bit complex with regex over multiple lines.
            # Instead of complex regex, let's find the ID, then look for the next "image": "..."
            
            # Simplified approach:
            # Find the block for this ID
            pattern = re.compile(r'("id":\s*' + str(pid) + r',[\s\S]*?"image":\s*")([^"]+)(")')
            
            match = pattern.search(content)
            if match:
                # Replace the group 2 (the URL)
                # We need to construct the replacement carefully
                # We can use sub, but simple string replacement on the match span is safer if unique
                
                # Actually, let's just do a string replace of the exact match found
                full_match = match.group(0)
                new_full = match.group(1) + img_path + match.group(3)
                content = content.replace(full_match, new_full)
                print(f"  Updated script.js for ID {pid}")
            else:
                print(f"  Could not find entry for ID {pid} in script.js")
        
        with open(script_file, 'w', encoding='utf-8') as f:
            f.write(content)
        print("script.js saved.")

if __name__ == "__main__":
    extract_and_update()
