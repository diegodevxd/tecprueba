import openpyxl

wb = openpyxl.load_workbook("resistencias_missing.xlsx")
sheet_names = wb.sheetnames

start_index = 102 - 91
end_index = 124 - 91

print(f"Sheets from index {start_index} to {end_index}:")
for i in range(start_index, end_index + 1):
    print(f"Index {i}: {sheet_names[i]}")
