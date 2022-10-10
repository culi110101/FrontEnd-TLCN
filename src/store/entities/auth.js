import {createAsyncThunk, createSlice, combineReducers} from '@reduxjs/toolkit'
import { apiUrl } from '../../common/consts'

import axios from 'axios'
// login
const initStateLogin = {
    isLoadingLogin: false,
    successLogin: false
}


export const loginAction = createAsyncThunk(
    "login",
    async ({email, password}) => {
        const {data} = await axios.post(`${apiUrl}/login`, {email, password})
        console.log(data)
        return data
    }
)

export const loginSlice = createSlice({
    name: "login",
    initialState: initStateLogin,
    extraReducers: (builder)=> {
        builder.addCase(loginAction.pending, (state) => {
            state.isLoadingLogin = true
        })
        builder.addCase(loginAction.fulfilled, (state, data) => {
            state.isLoadingLogin = false
            state.successLogin = data.payload.success
        })
        builder.addCase(loginAction.rejected, (state) => {
            state.isLoadingLogin = false
        })
    }
})

// reducer
const authReducer = combineReducers({
    login: loginSlice.reducer
})

export default authReducer