import { createSlice, combineReducers, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { apiUrl } from "../../common/consts";
import Cookies from 'js-cookie';

// get profile
const initStateGetProfile = {
    loadingGetProfile: false,
    success: false,
    user: {}
}

export const getProfileAction = createAsyncThunk(
    "profile",
    async () => {
        const config = {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('job')}`
            }
        }
        
        const {data} = await axios.get(`${apiUrl}/profile`, config)
        console.log(data)
        return data
    }
)

export const getProfileSlice = createSlice({
    initialState: initStateGetProfile,
    name: 'profile',
    extraReducers: (builder) => {
        builder.addCase(getProfileAction.pending, (state) => {
            state.loadingGetProfile = true
        })
        builder.addCase(getProfileAction.fulfilled, (state, data) => {
            state.loadingGetProfile = false
            state.user = data.payload.user
            state.success = data.payload.success
        })
        builder.addCase(getProfileAction.rejected, (state) => {
            state.loadingGetProfile = false
            state.success = false
        })
    }
})

// edit profile
const initStateEditProfile = {
    loadingEditProfile: false,
    success: false
}

export const editProfileAction = createAsyncThunk(
    "edit profile",
    async (profileData) => {
        const config = {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('job')}`
            }
        }
        
        const {data} = await axios.put(`${apiUrl}/profile`, profileData, config)
        console.log(data)
        return data
    }
)

export const editProfileSlice = createSlice({
    initialState: initStateEditProfile,
    name: 'edit profile',
    extraReducers: (builder) => {
        builder.addCase(editProfileAction.pending, (state) => {
            state.loadingEditProfile = true
        })
        builder.addCase(editProfileAction.fulfilled, (state, data) => {
            state.loadingEditProfile = false
            state.success = data.payload.success
        })
        builder.addCase(editProfileAction.rejected, (state) => {
            state.loadingEditProfile = false
            state.success = false
        })
    }
})


// change password
const initStateChangePassword = {
    loadingChangePassword: false,
    successChangePassword: false,
    messageChangePassword: ""
}

export const changePasswordAction = createAsyncThunk(
    'change password',
    async (changePassData) => {
        const {data} = await axios.put(`${apiUrl}/password/change`, changePassData)

        return data
    }
)

export const changePasswordSlice = createSlice({
    initialState: initStateChangePassword,
    name: 'change password',
    extraReducers: (builder) => {
        builder.addCase(changePasswordAction.pending, (state) => {
            state.loadingChangePassword = true
        })
        builder.addCase(changePasswordAction.fulfilled, (state, data) => {
            state.loadingChangePassword = false
            state.messageChangePassword = data.payload.message
            state.successChangePassword = data.payload.success
        })
        builder.addCase(changePasswordAction.rejected, (state) => {
            state.loadingChangePassword = false
            state.successChangePassword = false
        })
    }
})

// promote to employer
const initStatePromoteUser = {
    loadingPromoteUser: false,
    successPromoteUser: false,
    user: {}
}

export const promoteUserAction = createAsyncThunk(
    "promote user",
    async (userInfo) => {
        const {data} = await axios.put(`${apiUrl}/profile/promote`, userInfo)

        return data
    }
)

export const promoteUserSlice = createSlice({
    initialState: initStatePromoteUser,
    name: "promote user",
    extraReducers: (builder) => {
        builder.addCase(promoteUserAction.pending, (state) => {
            state.loadingPromoteUser = true
        })
        builder.addCase(promoteUserAction.fulfilled, (state, data) => {
            state.loadingPromoteUser = false
            state.successPromoteUser = data.payload.success
            state.user = data.payload.user
        })
        builder.addCase(promoteUserAction.rejected, (state) => {
            state.loadingPromoteUser = false
            state.successPromoteUser = false
        })
    }
})

// ban user
const initStateBanUser = {
    loadingBanUser: false,
    successBanUser: false,
    user: {}
}

export const banUserAction = createAsyncThunk(
    'ban user',
    async (id) => {
        const {data} = await axios.delete(`${apiUrl}/admin/users/${id}/ban`)

        return data
    }
)

export const banUserSlice = createSlice({
    initialState: initStateBanUser,
    name: "ban user",
    extraReducers: (builder) => {
        builder.addCase(banUserAction.pending, (state) => {
            state.loadingBanUser = true
        })
        builder.addCase(banUserAction.fulfilled, (state, data) => {
            state.loadingBanUser = false
            state.successBanUser = data.payload.success
            state.user = data.payload.user
        })
        builder.addCase(banUserAction.rejected, (state) => {
            state.loadingBanUser = false
            state.successBanUser = false
        })
    }
})




// reducer
const userReducer = combineReducers({
    getProfile: getProfileSlice.reducer,
    changePassword: changePasswordSlice.reducer,
    promoteUser: promoteUserSlice.reducer,
    banUser: banUserSlice.reducer
})

export default userReducer

