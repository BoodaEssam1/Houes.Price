from pydantic import BaseModel


class PredictionRequest(BaseModel):
    Balcony: float
    Bathroom: float
    Super_Area: float
    Carpet_Area: float

    location: str
    Status: str
    Ownership: str
    facing: str
    Transaction: str
    Furnishing: str


class PredictionResponse(BaseModel):
    predicted_price: float