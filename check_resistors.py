import re

def parse_val(name):
    # Try different patterns
    # Pattern 1: "Resitencia 1.2kΩ" or "Resistencia 100Ω"
    m = re.search(r'Resist?encia.*?([\d\.]+)\s*([kKmM]?)[oO\u03a9]', name)
    if m:
        val_str, unit = m.groups()
        val = float(val_str)
        if unit.lower() == 'k': val *= 1000
        if unit.lower() == 'm': val *= 1000000 # Mega? Or milli? usually M is mega. m is milli. 
        # But in our context "1mOhm" was seen in grep.
        if '1m' in name and val == 1: # "1mΩ" -> likely 1 milli ohm? 
            # Context: "Resitencia 1mΩ" -> wait, does it mean 1 Mega or 1 milli?
            # Standard E12 series usually starts at 1 Ohm or 10 Ohm. 
            # 5W resistors had 0.01 Ohm.
            # Let's assume 'm' is milli if it's explicitly lower case 'm', but normally 'M' is Mega.
            # However, looking at the grep: "Resitencia 1mΩ" (ID 91). Then "Resitencia 1Ω". 
            # 1mΩ is 0.001 Ohm.
            if 'm' in unit: val /= 1000.0 
        return val
    
    # Pattern 2: "Resistencia cerámica 5W 0.01 Ohm"
    m2 = re.search(r'([\d\.]+)\s*Ohm', name)
    if m2:
        return float(m2.group(1))
        
    return 999999999 # Unknown

resistors = []
with open('script.js', 'r', encoding='utf-8') as f:
    for line in f:
        if '"name":' in line and ('Resistencia' in line or 'Resitencia' in line):
            # Extract name value inside quotes
            name_match = re.search(r'"name":\s*"(.*?)"', line)
            if name_match:
                name = name_match.group(1)
                val = parse_val(name)
                resistors.append((val, name))

resistors.sort(key=lambda x: x[0])

print(f"Found {len(resistors)} resistors")
for val, name in resistors:
    print(f"{val} - {name}")
