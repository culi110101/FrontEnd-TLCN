import {configureStore} from '@reduxjs/toolkit'
import authReducer from './entities/auth'

export const store = configureStore({
    reducer: {
        auth: authReducer
    }
})

