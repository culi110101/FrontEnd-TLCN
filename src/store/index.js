import {configureStore} from '@reduxjs/toolkit'
import authReducer from './entities/auth'
import "../assets/sass/main.scss";

export const store = configureStore({
    reducer: {
        auth: authReducer
    }
})

