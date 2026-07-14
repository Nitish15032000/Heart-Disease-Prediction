import os
import sys
import json
import joblib
import pandas as pd

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

MODEL_PATH = os.path.join(BASE_DIR, "models", "KNN_heart.pkl")
SCALER_PATH = os.path.join(BASE_DIR, "models", "scaler.pkl")
COLUMNS_PATH = os.path.join(BASE_DIR, "models", "columns.pkl")

model = joblib.load(MODEL_PATH)
scaler = joblib.load(SCALER_PATH)
expected_columns = joblib.load(COLUMNS_PATH)

data = json.loads(sys.argv[1])

raw_input = {
    'Age': data['Age'],
    'RestingBP': data['RestingBP'],
    'Cholesterol': data['Cholesterol'],
    'FastingBS': data['FastingBS'],
    'MaxHR': data['MaxHR'],
    'Oldpeak': data['Oldpeak'],
    'Sex_' + data['Sex']:1,
    'ChestPainType_' + data['ChestPainType']:1,
    'RestingECG_' + data['RestingECG']:1,
    'ExerciseAngina_' + data['ExerciseAngina']:1,
    'ST_Slope_' + data['ST_Slope']:1
}

df = pd.DataFrame([raw_input])

for col in expected_columns:
    if col not in df.columns:
        df[col]=0

df = df[expected_columns]

scaled = scaler.transform(df)

prediction = int(model.predict(scaled)[0])

print(json.dumps({
    "prediction":prediction
}))