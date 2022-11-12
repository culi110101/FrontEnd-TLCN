import { createSlice, combineReducers, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { apiUrl } from "../../common/consts";


// query comments
const initStateQueryComments = {
    loadingQueryComments: false,
    successQueryComments: false,
    result: []
}

export const queryCommentsAction = createAsyncThunk(
    "query comments",
    async (dataQuery) => {
        const {data} = await axios.get(`${apiUrl}/comments?content=${dataQuery.content}&stars=${dataQuery.stars}&user=${dataQuery.user}&creator=${dataQuery.creator}&isCommented=${dataQuery.isCommented}&sortBy=${dataQuery.sortBy}&limit=${dataQuery.limit}&page=${dataQuery.page}&populate=${dataQuery.populate}`)

        return data
    }
)

export const queryCommentsSlice = createSlice({
    initialState: initStateQueryComments,
    name: "query comments",
    extraReducers: (builder) => {
        builder.addCase(queryCommentsAction.pending, (state)=>{
            state.loadingQueryComments = true
        })
        builder.addCase(queryCommentsAction.fulfilled, (state, data) => {
            state.loadingQueryComments = false
            state.successQueryComments = data.payload.success
            state.result = data.payload.result
        })
        builder.addCase(queryCommentsAction.fulfilled, (state, data) => {
            state.loadingQueryComments = false
            state.successQueryComments = false
        })
    }
})

// get comment by id
const initStateGetCommentById = {
    loadingGetCommentById: false,
    successGetCommentById: false,
    comment: {}
}

export const getCommentByIdAction = createAsyncThunk(
    "get comment by id",
    async (id) => {
        const {data} = await axios.get(`${apiUrl}/comments/${id}`)

        return data
    }
)

export const getCommentByIdSlice = createSlice({
    initialState: initStateGetCommentById,
    name: "get comment by id",
    extraReducers: (builder) => {
        builder.addCase(queryCommentsAction.pending, (state)=>{
            state.loadingGetCommentById = false
        })
        builder.addCase(queryCommentsAction.fulfilled, (state, data) => {
            state.loadingGetCommentById = false
            state.successGetCommentById =  data.payload.success
            state.comment = data.payload.comment
        })
        builder.addCase(queryCommentsAction.fulfilled, (state, data) => {
            state.loadingGetCommentById = false
            state.successGetCommentById =  false
        })
    }
})


// get comments with no star
const initStateGetCommentsWithNoStar = {
    loadingGetCommentsWithNoStar: false,
    successGetCommentsWithNoStar: false,
    count: 0,
    comments : []
}

export const getCommentsWithNoStarAction = createAsyncThunk(
    "get comment by id",
    async () => {
        const {data} = await axios.get(`${apiUrl}/me/comments/nostars`)

        return data
    }
)

export const getCommentsWithNoStarSlice = createSlice({
    initialState: initStateGetCommentsWithNoStar,
    name: "get comment by id",
    extraReducers: (builder) => {
        builder.addCase(queryCommentsAction.pending, (state)=>{
            state.loadingGetCommentsWithNoStar = false
        })
        builder.addCase(queryCommentsAction.fulfilled, (state, data) => {
            state.loadingGetCommentsWithNoStar= false,
            state.successGetCommentsWithNoStar= data.payload.success
            state.count= data.payload.count
            state.comments = data.payload.comments
        })
        builder.addCase(queryCommentsAction.fulfilled, (state) => {
            state.loadingGetCommentsWithNoStar= false
            state.successGetCommentsWithNoStar= false
        })
    }
})

// get my comments
const initStateGetMyComments = {
    loadingGetMyComments: false,
    successGetMyComments: false,
    count: 0,
    comments : []
}

export const getMyCommentsAction = createAsyncThunk(
    "get comment by id",
    async () => {
        const {data} = await axios.get(`${apiUrl}/me/comments`)

        return data
    }
)

export const getMyCommentsSlice = createSlice({
    initialState: initStateGetMyComments,
    name: "get my comments",
    extraReducers: (builder) => {
        builder.addCase(queryCommentsAction.pending, (state)=>{
            state.loadingGetMyComments = false
        })
        builder.addCase(queryCommentsAction.fulfilled, (state, data) => {
            state.loadingGetMyComments= false,
            state.successGetMyComments= data.payload.success
            state.count= data.payload.count
            state.comments = data.payload.comments
        })
        builder.addCase(queryCommentsAction.fulfilled, (state) => {
            state.loadingGetMyComments= false
            state.successGetMyComments= false
        })
    }
})

// get my created comments
const initStateGetMyCreatedComments = {
    loadingGetMyCreatedComments: false,
    successGetMyCreatedComments: false,
    count: 0,
    comments : []
}

export const getMyCreatedCommentsAction = createAsyncThunk(
    "get comment by id",
    async () => {
        const {data} = await axios.get(`${apiUrl}/me/comments/created`)

        return data
    }
)

export const getMyCreatedCommentsSlice = createSlice({
    initialState: initStateGetMyCreatedComments,
    name: "get my comments",
    extraReducers: (builder) => {
        builder.addCase(queryCommentsAction.pending, (state)=>{
            state.loadingGetMyCreatedComments = false
        })
        builder.addCase(queryCommentsAction.fulfilled, (state, data) => {
            state.loadingGetMyCreatedComments= false,
            state.successGetMyCreatedComments= data.payload.success
            state.count= data.payload.count
            state.comments = data.payload.comments
        })
        builder.addCase(queryCommentsAction.fulfilled, (state) => {
            state.loadingGetMyCreatedComments= false
            state.successGetMyCreatedComments= false
        })
    }
})


// reducers
const commentReducer = combineReducers({
    queryComments: queryCommentsSlice.reducer,
    getCommentById: getCommentByIdSlice.reducer,
    getCommentsWithNoStar: getCommentsWithNoStarSlice.reducer,
    getMyComments: getMyCommentsSlice.reducer,
    getMyCreatedComments: getMyCreatedCommentsSlice.reducer

})

export default commentReducer

