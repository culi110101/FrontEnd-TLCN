import { createSlice, combineReducers, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { apiUrl } from "../../common/consts";


// create transaction 
const initStateCreateTransaction = {
    loadingCreateTransaction: false,
    successCreateTransaction: false,
    transaction: {}
}

export const createTransactionAction = createAsyncThunk(
    'create transaction',
    async (transactionData) => {
        const {data} = await axios.post(`${apiUrl}/transaction/create`, transactionData)

        return data
    }
)

export const createTransactionSlice = createSlice({
    initialState: initStateCreateTransaction,
    name: 'create transaction',
    extraReducers: (builder) => {
        builder.addCase(createTransactionAction.pending, (state) => {
            state.loadingCreateTransaction = true
        })
        builder.addCase(createTransactionAction.fulfilled, (state, data) => {
            state.loadingCreateTransaction = false
            state.successCreateTransaction = data.payload.success
            state.transaction = data.payload.transaction
        })
        builder.addCase(createTransactionAction.rejected, (state) => {
            state.loadingCreateTransaction = false
            state.successCreateTransaction = false
        })
    }
})


// query transactions
const initStateQueryTransactions = {
    loadingCreateTransaction: false,
    successCreateTransaction: false,
    transactions: []
}

export const queryTransactionsAction = createAsyncThunk(
    'query transactions',
    async () => {
        const {data} = await axios.get(`${apiUrl}/admin/transactions`)

        return data
    }
)

export const queryTransactionsSlice = createSlice({
    initialState: initStateQueryTransactions,
    name: 'query transactions',
    extraReducers: (builder) => {
        builder.addCase(createTransactionAction.pending, (state) => {
            state.loadingCreateTransaction = true
        })
        builder.addCase(createTransactionAction.fulfilled, (state, data) => {
            state.loadingCreateTransaction = false
            state.successCreateTransaction = data.payload.success
            state.transactions = data.payload.transaction
        })
        builder.addCase(createTransactionAction.rejected, (state) => {
            state.loadingCreateTransaction = false
            state.successCreateTransaction = false
        })
    }
})

// get transaction by id
const initStateGetTransactionById = {
    loadingCreateTransaction: false,
    successCreateTransaction: false,
    transaction: {}
}

export const getTransactionByIdAction = createAsyncThunk(
    'get transaction by id',
    async (id) => {
        const {data} = await axios.get(`${apiUrl}/admin/transactions/${id}`)

        return data
    }
)

export const getTransactionByIdSlice = createSlice({
    initialState: initStateGetTransactionById,
    name: 'create transaction',
    extraReducers: (builder) => {
        builder.addCase(createTransactionAction.pending, (state) => {
            state.loadingCreateTransaction = true
        })
        builder.addCase(createTransactionAction.fulfilled, (state, data) => {
            state.loadingCreateTransaction = false
            state.successCreateTransaction = data.payload.success
            state.transaction = data.payload.transaction
        })
        builder.addCase(createTransactionAction.rejected, (state) => {
            state.loadingCreateTransaction = false
            state.successCreateTransaction = false
        })
    }
})

// reducers
const transactionReducer = combineReducers({
    createTransaction: createTransactionSlice.reducer,
    queryTransaction: queryTransactionsSlice.reducer,
    getTransactionById: getTransactionByIdSlice.reducer
})

export default transactionReducer