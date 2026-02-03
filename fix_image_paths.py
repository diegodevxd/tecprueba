import json
import os
import re

script_file = "script.js"

def fix_paths():
    with open(script_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Regex to find the products array part. It's usually `const products = [...]`
    # But since the file is large, we can parse the JSON object if we extract it.
    
    match = re.search(r'const products = (\[.*?\]);', content, re.DOTALL)
    if not match:
        print("Could not find products array.")
        return

    json_str = match.group(1)
    try:
        products = json.loads(json_str)
    except json.JSONDecodeError as e:
        # Fallback: The file might have trailing commas or comments?
        # script.js usually has clean JSON inside the variable assignment.
        print(f"JSON Error: {e}")
        return

    updated_count = 0
    for p in products:
        pid = p['id']
        if pid >= 178 and pid <= 183:
            name = p['name']
            clean_name = re.sub(r'[\\/*?:"<>|]', "", name).replace(" ", "_").replace("Ω", "Ohm")
            expected_img = f"IMAGES/prod_{pid}_{clean_name}.png"
            
            # Check if file exists (relative to current dir)
            if os.path.exists(expected_img):
                p['image'] = expected_img
                updated_count += 1
                print(f"Updated {pid} to {expected_img}")
            else:
                # Try finding valid image regardless of name
                # For 183 it definitely exists now
               print(f"File not found: {expected_img}")

    # Write back
    new_json = json.dumps(products, indent=2)
    new_content = content.replace(json_str, new_json)
    
    with open(script_file, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"Saved script.js. Updated {updated_count} products.")

if __name__ == "__main__":
    fix_paths()
