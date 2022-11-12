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
    name: "get categories no parents",
    initialState: initStateCategoriesNoParents,
    extraReducers: (builder) => {
        builder.addCase(getCategoriesNoParentAction.pending, (state) => {
            state.loadingGetCategories = true
        })
        builder.addCase(getCategoriesNoParentAction.fulfilled, (state, data) => {
            state.loadingGetCategories = false
            state.successGetCategories = data.payload.success
            state.count =  0
            state.categories = data.payload.categories
        })
        builder.addCase(getCategoriesNoParentAction.rejected, (state, data) => {
            state.loadingGetCategories =  false
            state.successGetCategories =  false
        })
    }
})


// get categories with children
const initStateGetCategoriesWithChildren = {
    loadingGetCategoriesWithChildren: false,
    successGetCategoriesWithChildren: false,
    categories: {}
}


export const getCategoriesWithChildrenAction = createAsyncThunk(
    "get categories with children",
    async () => {
        const {data} = await axios.get(`${apiUrl}/categories`)

        return data
    }
)

export const getCategoriesWithChildrenSlice = createSlice({
    name: "get categories with children",
    initialState: initStateGetCategoriesWithChildren,
    extraReducers: (builder) => {
        builder.addCase(getCategoriesWithChildrenAction.pending, (state) => {
            state.loadingGetCategoriesWithChildren= true
        })
        builder.addCase(getCategoriesWithChildrenAction.fulfilled, (state, data) => {
            state.loadingGetCategoriesWithChildren = false
            state.successGetCategoriesWithChildren = data.payload.success
            state.categories = data.payload.category
        })
        builder.addCase(getCategoriesWithChildrenAction.rejected, (state, data) => {
            state.loadingGetCategoriesWithChildren =  false
            state.successGetCategoriesWithChildren =  false
        })
    }
})

// get categories intro
const initStateGetCategoriesIntro = {
    loadingGetCategoriesIntro: false,
    categories: []
}

export const getCategoriesIntroAction = createAsyncThunk(
    "categories intro",
    async (limit) => {
        try{
            const {data} = await axios.get(`${apiUrl}/categories/intro/${limit}`)
            return data
        }
        catch(error){
            return error.response.data
        }
    }
)

export const getCategoriesIntroSlice = createSlice({
    initialState: initStateGetCategoriesIntro,
    name: "categories intro",
    extraReducers: (builder) => {
        builder.addCase(getCategoriesIntroAction.pending, (state) => {
            state.loadingGetCategoriesIntro= true
        })
        builder.addCase(getCategoriesIntroAction.fulfilled, (state, data) => {
            state.loadingGetCategoriesIntro = false
            state.successGetCategoriesIntro = data.payload.success
            state.categories = data.payload
        })
        builder.addCase(getCategoriesIntroAction.rejected, (state, data) => {
            state.loadingGetCategoriesIntro =  false
            state.successGetCategoriesIntro =  false
        })
    }
})

// reducers
const categoryReducer = combineReducers({
    createCategory: createCategorySlice.reducer,
    getCategories: getCategoriesSlice.reducer,
    getCategoriesNoParents: getCategoriesNoParentsSlice.reducer,
    getCategoriesWithChildren: getCategoriesWithChildrenSlice.reducer,
    getCategoriesIntro: getCategoriesIntroSlice.reducer
})

export default categoryReducer