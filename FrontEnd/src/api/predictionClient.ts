import axios from "axios";

const api = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
});

export async function predictHousePrice(data: any) {

    const response = await api.post(
        "/predict",
        data
    );

    return response.data;
}