import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import taskReducer from './slice/taskSlice';



export const store = configureStore({
    reducer:{
        tasks:taskReducer
    }
})

export default store;
