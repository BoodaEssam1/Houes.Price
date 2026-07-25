from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.routes import prediction


app = FastAPI(
    title="House Price Prediction API"
)


# السماح للـ Frontend يتصل بالـ Backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ربط الـ endpoints
app.include_router(
    prediction.router,
    prefix="/api"
)


@app.get("/")
def home():
    return {
        "message": "House Price Prediction API is running"
    }