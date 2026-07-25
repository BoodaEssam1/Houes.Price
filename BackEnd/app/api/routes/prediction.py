from fastapi import APIRouter
from pydantic import BaseModel

from app.services.inference import predict_price


router = APIRouter()



class HouseData(BaseModel):

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



@router.post("/predict")
def predict(data: HouseData):

    result = predict_price(
        data.dict()
    )


    return {
        "prediction": result
    }