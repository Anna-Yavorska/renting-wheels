import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCatalog = createAsyncThunk('catalog/fetchAll', async (_, thunkAPI) => {
    try {
        const response = await axios.get(
            'https://65faa2fc3909a9a65b1afb09.mockapi.io/api/v1/campers'
        );
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const getCarAbout = createAsyncThunk('car/info', async(itemId, thunkAPI) => {
    try {
        const response = await axios.get(
            `https://65faa2fc3909a9a65b1afb09.mockapi.io/api/v1/campers/${itemId}`);
        console.log(response);
        return response.data
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})