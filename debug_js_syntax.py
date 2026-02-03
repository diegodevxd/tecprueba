import json
import re

fname = "script.js"

try:
    with open(fname, "r", encoding="utf-8") as f:
        content = f.read()
            
    # Naive extraction: assume array starts at first [ and ends at last ]
    # But wait, script.js might have more code.
    # Pattern: const products = [...];
    match = re.search(r'const products = (\s*\[[\s\S]*?\]\s*);', content)
    if not match:
        print("Could not find products array regex match.")
        # Fallback: try to find first [ and last ]
        start = content.find('[')
        end = content.rfind(']')
        if start != -1 and end != -1:
            json_str = content[start:end+1]
        else:
            print("Could not find brackets.")
            exit(1)
    else:
        json_str = match.group(1)

    # JS isn't always strict JSON (keys might not have quotes, trailing commas). 
    # But looking at previous `head` output, keys had quotes.
    # Python json parser is strict. It might fail on trailing commas.
    # Let's try to parse and catch the error position.
    
    try:
        data = json.loads(json_str)
        print("JSON is valid.")
    except json.JSONDecodeError as e:
        print(f"JSON Error: {e}")
        # Show context
        pos = e.pos
        start_ctx = max(0, pos - 100)
        end_ctx = min(len(json_str), pos + 100)
        print("--- Context ---")
        print(json_str[start_ctx:end_ctx])
        print("--- Marker ---")
        print(" " * (pos - start_ctx) + "^")

except Exception as e:
    print(f"General Error: {e}")
