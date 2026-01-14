import openpyxl
import os

local_filename = "resistencias_missing.xlsx"
output_dir = "IMAGES"

def inspect_47k():
    wb = openpyxl.load_workbook(local_filename)
    for sheet_name in wb.sheetnames:
        if "47k" in sheet_name or "47" in sheet_name:
            print(f"checking sheet: {sheet_name}")
            ws = wb[sheet_name]
            if hasattr(ws, '_images'):
                print(f"Has images: {len(ws._images)}")
                for i, img in enumerate(ws._images):
                    print(f"Image {i}: format={img.format}")
                    # Try to save it
                    filename = f"debug_47k_{i}.png"
                    with open(filename, "wb") as f:
                        f.write(img._data())
                    print(f"Saved {filename}")
            else:
                 print("No _images attribute")
inspect_47k()
