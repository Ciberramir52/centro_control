import { createSlice } from "@reduxjs/toolkit";
import { testCollectedData } from "./collectedData";

export const collectedDataSlice = createSlice({
    name: 'collectedData',
    initialState: {
        vaccumCollectedData: testCollectedData,
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