import { createSlice } from "@reduxjs/toolkit";

export const collectedDataSlice = createSlice({
    name: 'collectedData',
    initialState: {
        vaccumCollectedData: [],
    },
    reducers: {
        onUpdateVaccumCollectedData: ( state, { payload }) => {
            state.vaccumData = payload;
        },
    }
});

export const {
    onUpdateVaccumCollectedData,
} = collectedDataSlice.actions;