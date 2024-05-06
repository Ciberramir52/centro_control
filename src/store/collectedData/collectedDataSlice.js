import { createSlice } from "@reduxjs/toolkit";
import { testCollectedData } from "./collectedData";

export const collectedDataSlice = createSlice({
    name: 'collectedData',
    initialState: {
        vaccumCollectedData: testCollectedData,
        isLoadingData: false,
    },
    reducers: {
        vaccumCollectedDataLoaded: ( state, { payload }) => {
            state.vaccumCollectedData = payload;
            state.isLoadingData = false;
        },
        startLoadingCollectedData: ( state ) => {
            state.isLoadingData = true;
        }

    }
});

export const {
    vaccumCollectedDataLoaded,
    startLoadingCollectedData
} = collectedDataSlice.actions;