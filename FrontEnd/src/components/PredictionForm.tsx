import { useState } from "react";
import { predictHousePrice } from "../api/predictionClient";

function PredictionForm() {

    const [formData, setFormData] = useState({
        Balcony: "",
        Bathroom: "",
        Super_Area: "",
        Carpet_Area: "",
        location: "",
        Status: "",
        Ownership: "",
        facing: "",
        Transaction: "",
        Furnishing: ""
    });

    const [price, setPrice] = useState<number | null>(null);


    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };


    const handleSubmit = async (
        e: React.FormEvent
    ) => {

        e.preventDefault();


        const data = {
            Balcony: Number(formData.Balcony),
            Bathroom: Number(formData.Bathroom),
            Super_Area: Number(formData.Super_Area),
            Carpet_Area: Number(formData.Carpet_Area),

            location: formData.location,
            Status: formData.Status,
            Ownership: formData.Ownership,
            facing: formData.facing,
            Transaction: formData.Transaction,
            Furnishing: formData.Furnishing
        };


        const result = await predictHousePrice(data);

        setPrice(result.prediction);

    };


    return (
        <div>

            <h1>House Price Prediction</h1>


            <form onSubmit={handleSubmit}>

                <input
                    name="Balcony"
                    placeholder="Balcony"
                    onChange={handleChange}
                />

                <input
                    name="Bathroom"
                    placeholder="Bathroom"
                    onChange={handleChange}
                />

                <input
                    name="Super_Area"
                    placeholder="Super Area"
                    onChange={handleChange}
                />

                <input
                    name="Carpet_Area"
                    placeholder="Carpet Area"
                    onChange={handleChange}
                />


                <input
                    name="location"
                    placeholder="Location"
                    onChange={handleChange}
                />

                <input
                    name="Status"
                    placeholder="Status"
                    onChange={handleChange}
                />

                <input
                    name="Ownership"
                    placeholder="Ownership"
                    onChange={handleChange}
                />

                <input
                    name="facing"
                    placeholder="Facing"
                    onChange={handleChange}
                />

                <input
                    name="Transaction"
                    placeholder="Transaction"
                    onChange={handleChange}
                />

                <input
                    name="Furnishing"
                    placeholder="Furnishing"
                    onChange={handleChange}
                />


                <button type="submit">
                    Predict
                </button>

            </form>


            {
                price && (
                    <h2>
                        Predicted Price: {price}
                    </h2>
                )
            }

        </div>
    );
}

export default PredictionForm;