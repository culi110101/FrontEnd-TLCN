import { createSlice, combineReducers, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { apiUrl } from "../../common/consts";


// create category
const initStateCreateCategory = {
    loadingCreateCategory: false,
    successCreateCategory: false,
    category: {}
}


export const createCategoryAction = createAsyncThunk(
    "create category",
    async (category) => {
        const {data} = await axios.post(`${apiUrl}/admin/categories/create`, category)

        return data
    }
)

export const createCategorySlice = createSlice({
    name: "create category",
    initialState: initStateCreateCategory,
    extraReducers: (builder) => {
        builder.addCase(createCategoryAction.pending, (state) => {
            state.loadingCreateCategory = true
        })
        builder.addCase(createCategoryAction.fulfilled, (state, data) => {
            state.category = data.payload.category
            state.loadingCreateCategory = false
            state.successCreateCategory = data.payload.success
        })
        builder.addCase(createCategoryAction.rejected, (state, data) => {
            state.loadingCreateCategory = false
            state.successCreateCategory = false
        })
    }
})


// admin get categories
const initStateGetCategories = {
    loadingGetCategories: false,
    successGetCategories: false,
    count: 0,
    categories: []
}


export const getCategoriesAction = createAsyncThunk(
    "get categories",
    async () => {
        const {data} = await axios.get(`${apiUrl}/admin/categories`)

        return data
    }
)

export const getCategoriesSlice = createSlice({
    name: "get categories",
    initialState: initStateGetCategories,
    extraReducers: (builder) => {
        builder.addCase(createCategoryAction.pending, (state) => {
            state.loadingGetCategories = true
        })
        builder.addCase(createCategoryAction.fulfilled, (state, data) => {
            state.loadingGetCategories = false
            state.successGetCategories = data.payload.success
            state.count =  0
            state.categories = data.payload.categories
        })
        builder.addCase(createCategoryAction.rejected, (state, data) => {
            state.loadingGetCategories =  false
            state.successGetCategories =  false
        })
    }
})

// get categoris with no parents with children
const initStateCategoriesNoParents = {
    loadingGetCategories: false,
    successGetCategories: false,
    count: 0,
    categories: []
}


export const getCategoriesNoParentAction = createAsyncThunk(
    "get categories no parents",
    async () => {
        const {data} = await axios.get(`${apiUrl}/categories`)

        return data
    }
)

export const getCategoriesNoParentsSlice = createSlice({
    name: "get categories",
    initialState: initStateCategoriesNoParents,
    extraReducers: (builder) => {
        builder.addCase(createCategoryAction.pending, (state) => {
            state.loadingGetCategories = true
        })
        builder.addCase(createCategoryAction.fulfilled, (state, data) => {
            state.loadingGetCategories = false
            state.successGetCategories = data.payload.success
            state.count =  0
            state.categories = data.payload.categories
        })
        builder.addCase(createCategoryAction.rejected, (state, data) => {
            state.loadingGetCategories =  false
            state.successGetCategories =  false
        })
    }
})


// get categories with children
const initStateCategoriesWithChildren = {
    loadingGetCategory: false,
    successGetCategory: false,
    categories: {}
}


export const getCategoriesWithChildrenAction = createAsyncThunk(
    "get categories no parents",
    async () => {
        const {data} = await axios.get(`${apiUrl}/categories`)

        return data
    }
)

export const getCategoriesWithChildrenSlice = createSlice({
    name: "get category",
    initialState: initStateCategoriesWithChildren,
    extraReducers: (builder) => {
        builder.addCase(createCategoryAction.pending, (state) => {
            state.loadingGetCategories = true
        })
        builder.addCase(createCategoryAction.fulfilled, (state, data) => {
            state.loadingGetCategories = false
            state.successGetCategories = data.payload.success
            state.categories = data.payload.category
        })
        builder.addCase(createCategoryAction.rejected, (state, data) => {
            state.loadingGetCategories =  false
            state.successGetCategories =  false
        })
    }
})

// reducers
const categoryReducer = combineReducers({
    createCategory: createCategorySlice.reducer,
    getCategories: getCategoriesSlice.reducer,
    getCategoriesNoParents: getCategoriesNoParentsSlice.reducer,
    getCategoriesWithChildren: getCategoriesWithChildrenSlice.reducer

})

export default categoryReducer