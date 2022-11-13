import { createSlice, combineReducers, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { apiUrl } from "../../common/consts";


// create task
const initStateCreateTask = {
    loadingCreateTask: false,
    successCreateTask: false,
    task: {}
}


export const createTaskAction = createAsyncThunk(
    'create task',
    async (taskData) => {
        try{
            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('job')}`
                }
            }
            const {data} = await axios.post(`${apiUrl}/tasks/create`, taskData, config)
            console.log(data)
            return data
        }
        catch(error){
            console.log(error)
            return error.response.data
        }
    }
)

export const createTaskSlice = createSlice({
    initialState: initStateCreateTask,
    name: "create tasks",
    extraReducers: (builder) => {
        builder.addCase(createTaskAction.pending, (state) => {
            state.loadingCreateTask = true
        })
        builder.addCase(createTaskAction.fulfilled, (state, data) => {
            state.loadingCreateTask = false
            state.successCreateTask = data.payload.success
            state.task = data.payload.task
        })
    }
})


// get tasks by job
const initStateGetTasksByJob = {
    loadingGetTasks: false,
    successGetTasks: false,
    tasks: []
}

export const getTasksByJobAction = createAsyncThunk(
    'get tasks',
    async (jobId) => {
        const {data} = await axios.get(`${apiUrl}/jobs/${jobId}/tasks`)
        console.log(data)
        return data
    }
)

export const getTasksByJobSlice = createSlice({
    initialState: initStateGetTasksByJob,
    name: 'get tasks',
    extraReducers: (builder) => {
        builder.addCase(getTasksByJobAction.pending, (state) => {
            state.loadingGetTasks = true
        })
        builder.addCase(getTasksByJobAction.fulfilled, (state, data) => {
            state.loadingGetTasks = false
            state.successGetTasks = data.payload.success
            state.tasks = data.payload.tasks
        })
        builder.addCase(getTasksByJobAction.rejected, (state) => {
            state.loadingGetTasks = false
            state.successGetTasks = false
        })
    }
})

// get task by id
const initStateGetTaskById = {
    loadingGetTask: false,
    successGetTask: false,
    task: {}
}

export const getTaskByIdAction = createAsyncThunk(
    "get task",
    async (taskId) => {
        const {data} = await axios.get(`${apiUrl}/tasks/${taskId}`)

        return data
    }
)

export const getTaskByIdSlice = createSlice({
    initialState: initStateGetTaskById,
    name: 'get task by id',
    extraReducers: (builder) => {
        builder.addCase(getTaskByIdAction.pending, (state) => {
            state.loadingGetTask = true
        })
        builder.addCase(getTaskByIdAction.fulfilled, (state, data) => {
            state.loadingGetTask = false
            state.successGetTask = data.payload.success
            state.task = data.payload.task
        })
        builder.addCase(getTaskByIdAction.rejected, (state) => {
            state.loadingGetTask = false
            state.successGetTask = false
        })
    }
})

// done task
const initStateDoneTask = {
    loadingDoneTask: false,
    successDoneTask: false,
    task: {}
}

export const doneTaskAction = createAsyncThunk(
    "done task",
    async (taskId) => {
        const {data} = await axios.put(`${apiUrl}/tasks/${taskId}/done`)

        return data
    }
)

export const doneTaskSlice = createSlice({
    initialState: initStateDoneTask,
    name: "done task",
    extraReducers: (builder) => {
        builder.addCase(doneTaskAction.pending, (state) => {
            state.loadingDoneTask = true
        })
        builder.addCase(doneTaskAction.fulfilled, (state, data) => {
            state.loadingDoneTask = false
            state.successDoneTask = data.payload.success
            state.task = data.payload.task
        })
        builder.addCase(doneTaskAction.rejected, (state) => {
            state.loadingDoneTask = false
            state.successDoneTask = false
        })
    }
})

// finish task
const initStateFinishTask = {
    loadingFinishTask: false,
    successFinishTask: false,
    task: {}
}

export const finishTaskAction = createAsyncThunk(
    'finish task',
    async (taskId) => {
        const {data} = await axios.put(`${apiUrl}/${taskId}/finish`)

        return data
    }
)

export const finishTaskSlice = createSlice({
    initialState: initStateFinishTask,
    name: "finish task",
    extraReducers: (builder) => {
        builder.addCase(finishTaskAction.pending, (state) => {
            state.loadingFinishTask = true
        })
        builder.addCase(finishTaskAction.fulfilled, (state, data) => {
            state.loadingFinishTask = false
            state.successFinishTask = data.payload.success
            state.task = data.payload.task
        })
        builder.addCase(finishTaskAction.rejected, (state) => {
            state.loadingFinishTask = false
            state.successFinishTask = false
        })
    }
})

// reducers
const taskReducer = combineReducers({
    createTask: createTaskSlice.reducer,
    getTasksByJob: getTasksByJobSlice.reducer,
    getTaskById: getTaskByIdSlice.reducer,
    doneTask: doneTaskSlice.reducer,
    finishTask: finishTaskSlice.reducer
})

export default taskReducer
