export interface PredictionRequest {
    Balcony: number;
    Bathroom: number;
    Super_Area: number;
    Carpet_Area: number;

    location: string;
    Status: string;
    Ownership: string;
    facing: string;
    Transaction: string;
    Furnishing: string;
}

export interface PredictionResponse {
    predicted_price: number;
}