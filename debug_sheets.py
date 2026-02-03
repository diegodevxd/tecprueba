import pandas as pd
print("Checking sheets...")
try:
    xls = pd.ExcelFile("Capacitores Electrolíticos.xlsx")
    print("Sheet names:", xls.sheet_names)
    for sheet in xls.sheet_names:
        print(f"--- Sheet: {sheet} ---")
        df = pd.read_excel(xls, sheet_name=sheet, header=None)
        print(df.head(20))
except Exception as e:
    print(f"Error: {e}")
