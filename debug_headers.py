import pandas as pd

file_path = "Capacitores Electrolíticos.xlsx"
try:
    df = pd.read_excel(file_path)
    print("Columns:", df.columns.tolist())
    print("First row:", df.iloc[0].to_dict())
except Exception as e:
    print(f"Error reading excel: {e}")
