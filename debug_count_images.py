import openpyxl

local_filename = "resistencias_debug.xlsx"

def count_all_images():
    wb = openpyxl.load_workbook(local_filename)
    total_images = 0
    for sheet_name in wb.sheetnames:
        ws = wb[sheet_name]
        try:
            if hasattr(ws, '_images'):
                count = len(ws._images)
                total_images += count
                if count > 0:
                    print(f"Sheet '{sheet_name}' has {count} images.")
        except:
            pass
    print(f"Total images found: {total_images}")

if __name__ == "__main__":
    count_all_images()
