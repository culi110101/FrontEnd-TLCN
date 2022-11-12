import { createSlice, combineReducers, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { apiUrl } from "../../common/consts";


// get current payment history
const initStateGetCurrentPaymentHistory = {
    loadingGetCurrentPaymentHistory: false,
    successGetCurrentPaymentHistory: false,
    paymentHistory: {}
}


export const getCurrentPaymentHistoryAction = createAsyncThunk(
    "get current",
    async () => {
        const {data} = await axios.get(`${apiUrl}/payments`)

        return data
    }
)


export const getCurrentPaymentHistorySlice = createSlice({
    initialState: initStateGetCurrentPaymentHistory,
    name: 'get current',
    
})
