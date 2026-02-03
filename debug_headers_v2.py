import pandas as pd
print("Reading raw data...")
try:
    df = pd.read_excel("Capacitores Electrolíticos.xlsx", header=None)
    print(df.head(50))
except Exception as e:
    print(f"Error: {e}")
