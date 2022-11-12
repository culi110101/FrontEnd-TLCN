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



//register
const initStateRegister = {
    loadingRegister: false,
    successRegister: false,
    message: '',
    comfirmEmailToken: ''
}

export const registerAction = createAsyncThunk(
    'register',
    async (registerData) => {
        const {data} = await axios.post(`${apiUrl}/register`, registerData)

        return data
    }
)

export const registerSlice = createSlice({
    initialState: initStateRegister,
    name: "register",
    extraReducers: (builder) => {
        builder.addCase(registerAction.pending, (state) => {
            state.loadingRegister = true
        })
        builder.addCase(registerAction.fulfilled, (state, data) => {
            state.loadingRegister = false
            state.comfirmEmailToken = data.payload.confirmEmailToken
            state.message = data.payload.message
            state.successRegister = data.payload.success
        })
    }
})


// confirm email
const initStateConfirmEmail = {
    loadingConfirmEmail: false,
    token: {},
    user: {},
    success: false
}

export const confirmEmailAction = createAsyncThunk(
    'confirm email',
    async (token) => {
        const {data} = await axios.get(`${apiUrl}/email/confirm/${token}`)

        return data
    }
)

export const confirmEmailSlice = createSlice({
    initialState: initStateConfirmEmail,
    name: "confirm email",
    extraReducers: (builder) => {
        builder.addCase(confirmEmailAction.pending, (state) => {
            state.loadingConfirmEmail = true
        })
        builder.addCase(confirmEmailAction.fulfilled, (state, data) => {
            state.loadingConfirmEmail = false
            state.user = data.payload.user
            state.token = data.payload.token
            state.success = data.payload.success
        })
        builder.addCase(confirmEmailAction.rejected, (state) => {
            state.loadingConfirmEmail = false
            state.success = false
        })
    }
})

// forgot password
const initStateForgotPassword = {
    loadingForgotPassword: false,
    successForgotPassword: false,
    message: '',
    resetPasswordToken: ''
}

export const forgotPasswordAction = createAsyncThunk(
    'forgot password',
    async (email) => {
        const {data} = await axios.post(`${apiUrl}/password/forgot`, {email})

        return data
    }
)

export const forgotPasswordSlice = createSlice({
    initialState: initStateForgotPassword,
    name: 'forgot password',
    extraReducers: (builder) => {
        builder.addCase(forgotPasswordAction.pending, (state) => {
            state.loadingForgotPassword = true
        })
        builder.addCase(forgotPasswordAction.fulfilled, (state, data) => {
            state.loadingForgotPassword = false
            state.resetPasswordToken = data.payload.resetPasswordToken
            state.message = data.payload.message
            state.successForgotPassword = data.payload.successForgotPassword
        })
        builder.addCase(forgotPasswordAction.rejected, (state) => {
            state.loadingForgotPassword = false
            state.successForgotPassword = false
        })
    }
})


// reducer
const authReducer = combineReducers({
    login: loginSlice.reducer,
    register: registerSlice.reducer,
    confirmEmail: confirmEmailSlice.reducer,
    forgotPassword: forgotPasswordSlice.reducer
})


export default authReducer