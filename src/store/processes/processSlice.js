import { createSlice } from "@reduxjs/toolkit";

export const processSlice = createSlice({
    name: 'processes',
    initialState: {
        activeProcess: '',
        isVaccumRunning: false,
    },
    reducers: {
        onSetActiveProcess: ( state, { payload }) => {
            state.activeProcess = payload;
        },
        onDeleteProcess: ( state ) => {
            state.activeProcess = '';
        },
        onStartVaccum: ( state ) => {
            state.isVaccumRunning = true;
            state.activeProcess = 'vaccum';
        },
        onStopVaccum: ( state ) => {
            state.isVaccumRunning = false;
            state.activeProcess = '';
        },
    }
})

export const {
    onStartVaccum,
    onStopVaccum,
    onSetActiveProcess,
    onDeleteProcess
} = processSlice.actions;