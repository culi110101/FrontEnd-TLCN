import {configureStore} from '@reduxjs/toolkit'
import authReducer from './entities/auth'
import userReducer from './entities/user'
import transactionReducer from './entities/transaction'
import taskReducer from './entities/task'
import categoryReducer from './entities/category'
import commentReducer from './entities/comment'
import jobReducer from './entities/job'
import pointHistoryReducer from './entities/pointHistory'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        transaction: transactionReducer,
        task: taskReducer,
        category: categoryReducer,
        comment: commentReducer,
        job: jobReducer,
        pointHistory: pointHistoryReducer
    }
})

