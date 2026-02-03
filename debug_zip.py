import zipfile

local_filename = "resistencias_debug.xlsx"

def list_zip_contents():
    with zipfile.ZipFile(local_filename, 'r') as z:
        for f in z.namelist():
            if f.startswith('xl/media') or f.startswith('xl/drawings'):
                print(f)

if __name__ == "__main__":
    list_zip_contents()
