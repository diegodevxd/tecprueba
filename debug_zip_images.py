import zipfile
import os

xlsx_path = "Capacitores Electrolíticos.xlsx"
print(f"Inspecting {xlsx_path}...")

try:
    with zipfile.ZipFile(xlsx_path, 'r') as z:
        # List all files in the archive
        files = z.namelist()
        media_files = [f for f in files if 'media' in f]
        print(f"Found {len(media_files)} media files.")
        for f in media_files:
            print(f" - {f}")
except Exception as e:
    print(f"Error opening zip: {e}")
