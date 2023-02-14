import { createSlice } from '@reduxjs/toolkit';
import React from 'react';

const initialState ={
    tasksList:[],
    selectedTaks:[]
}

const tasksSlice = createSlice({
    name:"tasksSlice",
    initialState,
    reducers:{
        addTasksToList:(state,action)=>{
            const id = Math.random() * 100;
            let task = {...action.payload,id}
            state.tasksList.push(task);
        },

        removeFromList:(state,action)=>{
            state.tasksList = state.tasksList.filter(task=> task.id !=action.payload.id)
        },

        updateTaskInList:(state,action)=>{
            state.tasksList = state.tasksList.map(task=> task.id === action.payload.id?action.payload:task)
        },

        setSelectedTask:(state,action)=>{
            state.selectedTaks = action.payload;
        },
    }
})

export const {setSelectedTask,updateTaskInList,removeFromList,addTasksToList} = tasksSlice.actions

export default tasksSlice.reducer
