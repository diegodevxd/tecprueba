import re

script_path = "script.js"

def main():
    with open(script_path, "r", encoding="utf-8") as f:
        lines = f.readlines()
        
    new_lines = []
    fixed_count = 0
    
    # Target phrase that ends properly
    target_end = 'diseño de lógica discreta."'
    
    for line in lines:
        if target_end in line:
            # Check if there is garbage after the target_end
            # Valid line should look like: ...discreta." (maybe ,)
            # Or ...discreta."
            
            # Split by target_end
            parts = line.split(target_end)
            if len(parts) > 1:
                # Part 0 is prefix + target_end (implicit)
                # Part 1 is the rest
                remainder = parts[1].strip()
                
                # If remainder has content other than comma, we fix it
                if remainder != "" and remainder != ",":
                    # We assume it should be just a comma if it's not the last prop, 
                    # but looking at the file context, most props have commas.
                    # Or we can check if original line ended with comma.
                    
                    has_comma = line.strip().endswith(",") or remainder.endswith(",") or '",' in remainder
                    
                    # Construct clean line
                    prefix = parts[0]
                    # Indent is in prefix
                    clean_line = prefix + target_end
                    if has_comma or True: # Safer to add comma if it's not the last item. Products in array usually have commas.
                        # Wait, last item in object doesn't need comma, but usually has in these lists if followed by }
                        # Let's assume comma is safe or check next line. 
                        # Actually, looking at the garbage, it ends with quote.
                        # The garbage is: 0\" ... chip"
                        # The original line ended withQuote and likely Comma.
                        # Let's append a comma to be safe, JS allows trailing commas.
                        clean_line += ","
                    
                    clean_line += "\n"
                    new_lines.append(clean_line)
                    fixed_count += 1
                    # print(f"Fixed: {line.strip()[:50]}...")
                    continue
        
        new_lines.append(line)

    if fixed_count > 0:
        print(f"Fixed {fixed_count} corrupt lines.")
        with open(script_path, "w", encoding="utf-8") as f:
            f.writelines(new_lines)
    else:
        print("No corrupt lines found matching criteria.")

if __name__ == "__main__":
    main()
