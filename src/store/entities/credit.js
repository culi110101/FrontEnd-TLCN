import { createSlice, combineReducers, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { apiUrl } from "../../common/consts";


// get credits
const initStateGetCredits = {
    loadingGetCredits: false,
    credits: []
}


export const getCreditsAction = createAsyncThunk(
    "get credits",
    async (num) => {
        const {data} = await axios.get(`${apiUrl}/credits?num=${num}`)
        console.log(data)
        return data
    }
)

export const getCreditsSlice = createSlice({
    name: "get credits",
    initialState: initStateGetCredits,
    extraReducers: (builder) => {
        builder.addCase(getCreditsAction.pending, (state) => {
            state.loadingGetCredits = true
        })
        builder.addCase(getCreditsAction.fulfilled, (state, data) => {
            console.log(data.payload)
            state.credits = data.payload.credits
            state.loadingGetCredits = false
        })
        builder.addCase(getCreditsAction.rejected, (state, data) => {
            state.loadingGetCredits = false
        })
    }
})



// reducer
const creditReducer = combineReducers({
    getCredits: getCreditsSlice.reducer
})

export default creditReducer
