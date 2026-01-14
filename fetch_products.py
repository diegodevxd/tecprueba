import requests
import csv
import io
import json
import re

url = "https://docs.google.com/spreadsheets/d/1w-uhW6EjDq0NDscIrlCm-I7uQq89cLUwlCAM7NIVua8/export?format=csv"

try:
    # 1. Download
    response = requests.get(url)
    response.raise_for_status()
    # Decode explicitly if needed, but requests tries to guess. 
    # Google mostly sends UTF-8.
    response.encoding = 'utf-8' 
    
    # 2. Parse CSV
    f = io.StringIO(response.text)
    reader = csv.reader(f)
    rows = list(reader)
    
    # 3. Print Headers
    if len(rows) > 0:
        print(f"Headers (Row 0): {rows[0]}")
    else:
        print("CSV Empty")
        exit(0)
        
    # 4. Print first 2 rows of data
    print("First 2 rows of data:")
    for i in range(1, min(3, len(rows))):
        print(rows[i])
    
    print("-" * 30)

    # 5. Construct JS Array
    products = []
    
    # Detect format. 
    # If Headers are empty strings -> likely Vertical Card format.
    # If Headers contain "Nombre", "Precio" -> Table format.
    
    headers = [h.strip().lower() for h in rows[0]]
    is_table = any(k in headers for k in ['nombre', 'name', 'producto', 'price', 'precio'])
    
    if is_table:
        # Table Parsing Strategy
        # Map headers to indices
        header_map = {}
        for idx, h in enumerate(headers):
            header_map[h] = idx
            
        # Helper to get col value
        def get_col(row_data, possible_names):
            for name in possible_names:
                if name in header_map:
                    try:
                        return row_data[header_map[name]]
                    except IndexError:
                        return ""
            return ""

        for i in range(1, len(rows)):
            row = rows[i]
            if not any(row): continue # Skip empty rows
            
            # Safe parsing
            name = get_col(row, ['nombre', 'name', 'producto'])
            if not name: continue
            
            price_raw = get_col(row, ['precio', 'price', 'costo'])
            image = get_col(row, ['imagen', 'image', 'foto'])
            desc = get_col(row, ['descripcion', 'description'])
            cat = get_col(row, ['categoria', 'category']) or 'componentes'
            
            # Format Price
            price_nums = re.findall(r'[0-9]+(?:\.[0-9]+)?', price_raw.replace(',', '.'))
            if price_nums:
                fmt_price = f"${float(price_nums[0]):.2f} MXN"
            else:
                fmt_price = "$0.00 MXN"
                
            products.append({
                "id": len(products) + 1,
                "name": name,
                "category": cat,
                "price": fmt_price,
                "image": image,
                "description": desc
            })

    else:
        # Vertical Card Parsing Strategy (Single Product assumption based on data)
        # We only saw 1 data block in inspection.
        
        name = ""
        if len(rows) > 1 and rows[1][0]:
            name = rows[1][0]
        
        price_str = "0"
        image = ""
        description = ""
        category = "componentes"
        
        for i, row in enumerate(rows):
            if not row: continue
            
            key = row[0].strip().lower()
            val = row[1].strip() if len(row) > 1 else ""
            
            if 'precio' in key:
                price_str = val
            
            if 'imagen' in key or 'foto' in key:
                image = val
                
            if 'descripc' in key:
                # Description might be in val OR in next row
                if val:
                    description = val
                elif i + 1 < len(rows) and rows[i+1]:
                    description = rows[i+1][0]
            
            # Try to grab image from any cell if it looks like a URL
            for cell in row:
                if isinstance(cell, str) and (cell.startswith('http') and ('.jpg' in cell or '.png' in cell)):
                    image = cell

        # Clean Price
        # Remove non-numeric except dot
        # Example: "$7Mxn " -> "7"
        price_nums = re.findall(r'[0-9]+(?:\.[0-9]+)?', price_str.replace(',', '.'))
        if price_nums:
            clean_price = price_nums[0]
            formatted_price = f"${float(clean_price):.2f} MXN"
        else:
            formatted_price = "$0.00 MXN"
            
        products.append({
            "id": 1,
            "name": name,
            "category": category,
            "price": formatted_price,
            "image": image,
            "description": description.strip()
        })

    # Output JSON string
    json_output = json.dumps(products, indent=4, ensure_ascii=False)
    print("JSON Result:")
    print(json_output)

except Exception as e:
    import traceback
    traceback.print_exc()
