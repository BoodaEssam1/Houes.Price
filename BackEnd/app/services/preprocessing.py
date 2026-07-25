# import pandas as pd
# from app.shemas.prediction import PredictionRequest

# FEATURE_ORDER = [
#     "Bathroom",
#     "Balcony",
#     "Super Area",
#     "Carpet Area",
#     "location",
#     "Status",
#     "Ownership",
#     "facing",
#     "Transaction",
#     "Furnishing"
# ]


# def request_to_dataframe(req: PredictionRequest) -> pd.DataFrame:
#     row = {
#         "Bathroom": req.Bathroom,
#         "Balcony": req.Balcony,
#         "Super Area": req.Super_Area,
#         "Carpet Area": req.Carpet_Area,
#         "location": req.location,
#         "Status": req.Status,
#         "Ownership": req.Ownership,
#         "facing": req.facing,
#         "Transaction": req.Transaction,
#         "Furnishing": req.Furnishing,
#     }

#     return pd.DataFrame([row], columns=FEATURE_ORDER)