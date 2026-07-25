import joblib
import pandas as pd
import os


BASE_DIR = os.path.dirname(
    os.path.dirname(
        os.path.dirname(__file__)
    )
)


MODEL_PATH = os.path.join(
    BASE_DIR,
    "house_price.pkl"
)


model = joblib.load(MODEL_PATH)



def predict_price(data):

    df = pd.DataFrame([data])

    df = df.rename(columns={
        "Super_Area": "Super Area",
        "Carpet_Area": "Carpet Area"
    })

    prediction = model.predict(df)

    return float(prediction[0])