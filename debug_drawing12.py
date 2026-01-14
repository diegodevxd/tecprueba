import zipfile

local_filename = "resistencias_debug.xlsx"

def extract_drawing12():
    with zipfile.ZipFile(local_filename, 'r') as z:
        with z.open('xl/drawings/drawing12.xml') as f:
            print(f.read().decode('utf-8'))

if __name__ == "__main__":
    extract_drawing12()
