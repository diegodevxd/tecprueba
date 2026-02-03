import requests
import csv
import io

url = "https://docs.google.com/spreadsheets/d/1w-uhW6EjDq0NDscIrlCm-I7uQq89cLUwlCAM7NIVua8/export?format=csv"

print(f"Fetching data from {url}...")
response = requests.get(url)
content = response.text
f = io.StringIO(content)
reader = csv.reader(f)
params_found = 0
rows = list(reader)
print(f"Total rows read: {len(rows)}")

for i, row in enumerate(rows):
    # Print first few rows of each potential block or separators
    if i < 20: 
        print(f"Row {i}: {row}")
    elif i > 20 and i < 40:
        print(f"Row {i}: {row}")
    
    # Check for price keyword to see distribution
    if row and len(row) > 0 and 'Precio' in row[0]:
        print(f"Found Price at Row {i}: {row}")

