import { createSlice, combineReducers, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { apiUrl } from "../../common/consts";


// create point history
const initStateCreatePointHistory = {
    loadingCreatePointHistory: false,
    successCreatePointHistory: false,
    pointHistory: {}
}

export const createPointHistoryAction = createAsyncThunk(
    "create point history",
    async (historyData) => {
        const {data} = await axios.post(`${apiUrl}/pointhistories/create`, historyData)

        return data
    }
)

export const createPointHistorySlice = createSlice({
    initialState: initStateCreatePointHistory,
    name: "create point history",
    extraReducers: (builder) => {
        builder.addCase(createPointHistoryAction.pending, (state)=>{
            state.loadingCreatePointHistory = true
        })
        builder.addCase(createPointHistoryAction.fulfilled, (state, data) => {
            state.loadingCreatePointHistory = false
            state.successCreatePointHistory = data.payload.success
            state.pointHistory = data.payload.pointHistory
        })
        builder.addCase(createPointHistoryAction.rejected, (state, data) => {
            state.loadingCreatePointHistory = false
            state.successCreatePointHistory = false
        })
    }
})


// get comission
const initStateGetComission = {
    loadingGetComission: false,
    successGetComission: false,
    commission: {}
}

export const getComissionAction = createAsyncThunk(
    "get comission",
    async (comissionData) => {
        const {data} = await axios.post(`${apiUrl}/pointhistories/create`, comissionData)

        return data
    }
)

export const getComissionSlice = createSlice({
    initialState: initStateGetComission,
    name: "get comission",
    extraReducers: (builder) => {
        builder.addCase(getComissionAction.pending, (state)=>{
            state.loadingGetComission = true
        })
        builder.addCase(getComissionAction.fulfilled, (state, data) => {
            state.loadingGetComission = false
            state.successGetComission = data.payload.success
            state.commission = data.payload.commission
        })
        builder.addCase(getComissionAction.rejected, (state) => {
            state.loadingGetComission = false
            state.successGetComission = false
        })
    }
})


// reducer
const pointHistoryReducer = combineReducers({
    createPointHistory: createPointHistorySlice.reducer,
    getComission: getComissionSlice.reducer
})

export default pointHistoryReducer

