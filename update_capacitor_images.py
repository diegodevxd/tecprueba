import openpyxl
import os
import re

xlsx_path = "Capacitores Electrolíticos.xlsx"
script_path = "script.js"
output_dir = "IMAGES"
start_id = 219

def main():
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    print(f"Loading {xlsx_path}...")
    wb = openpyxl.load_workbook(xlsx_path)
    
    print(f"Reading {script_path}...")
    with open(script_path, 'r', encoding='utf-8') as f:
        script_content = f.read()

    current_id = start_id
    updated_content = script_content
    
    processed_count = 0

    for sheet_name in wb.sheetnames:
        ws = wb[sheet_name]
        
        if hasattr(ws, '_images') and len(ws._images) > 0:
            img = ws._images[0]
            ext = "png"
            if hasattr(img, 'format') and img.format:
                ext = img.format.lower()
            if ext == 'jpeg': ext = 'jpg'
            
            # Save image
            filename = f"prod_{current_id}.{ext}"
            filepath = os.path.join(output_dir, filename)
            
            try:
                with open(filepath, "wb") as f:
                    f.write(img._data())
                print(f"Saved {filepath}")
                
                # Update script.js content
                # Search for the block starting with "id": current_id
                # Then look for "image": "..." inside it.
                # Since we know the structure is roughly:
                # {
                #   "id": 219,
                #   "category": "componentes",
                #   "image": "IMAGES/capacitor_default.jpg",
                
                # Regex to match: "id": 219, (anything until) "image": "(anything)",
                pattern = r'("id":\s*' + str(current_id) + r'\s*,[\s\S]*?"image":\s*")[^"]*(")'
                
                # Check if pattern exists first
                if re.search(pattern, updated_content):
                    updated_content = re.sub(
                        pattern, 
                        r'\1IMAGES/' + filename + r'\2', 
                        updated_content, 
                        count=1
                    )
                    processed_count += 1
                else:
                    print(f"Warning: Could not find script entry for ID {current_id}")

            except Exception as e:
                print(f"Error saving image for ID {current_id}: {e}")
        else:
            print(f"No image found for sheet {sheet_name} (ID {current_id})")
        
        current_id += 1

    if processed_count > 0:
        print(f"Updating {script_path}...")
        with open(script_path, 'w', encoding='utf-8') as f:
            f.write(updated_content)
        print("Done.")
    else:
        print("No script updates made.")

if __name__ == "__main__":
    main()
