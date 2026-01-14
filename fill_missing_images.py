import re
import os

script_file = "script.js"
fallback_image = "IMAGES/prod_101_Resitencia_3.3Ohm.png"

def fill_missing_images():
    with open(script_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # IDs 102 to 124
    count = 0
    for pid in range(102, 125):
        # Regex to find the image line for this ID
        # "id": 102, ... "image": "...",
        
        # We find the ID first
        id_marker = f'"id": {pid},'
        start_idx = content.find(id_marker)
        if start_idx == -1:
            print(f"ID {pid} not found")
            continue
            
        # Find the image field following this ID (before the next ID or end of object)
        # We can look for "image": "..." after start_idx
        
        # Careful not to skip to next product
        # Find next "id": or "}" to bound search
        next_id = content.find('"id":', start_idx + len(id_marker))
        
        img_start = content.find('"image":', start_idx)
        
        if next_id != -1 and img_start > next_id:
            print(f"No image field for ID {pid} before next ID?")
            continue
            
        # Replace the image value
        # Pattern: "image": "VALUE",
        # We want to replace VALUE with fallback_image
        
        # Using regex on the substring might be safer
        # Extract the chunk
        segment = content[start_idx : next_id if next_id != -1 else len(content)]
        
        new_segment = re.sub(r'"image":\s*"[^"]+"', f'"image": "{fallback_image}"', segment)
        
        # Replace in content (only first occurrence in this segment, but replace works on strings)
        # We have to be careful about uniqueness match.
        
        # Let's do string slicing replacement
        content = content[:start_idx] + new_segment + content[start_idx + len(segment):]
        count += 1

    with open(script_file, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Updated {count} products with fallback image.")

if __name__ == "__main__":
    fill_missing_images()
