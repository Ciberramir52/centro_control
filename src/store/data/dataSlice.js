import { createSlice } from "@reduxjs/toolkit";
import { vaccumDataNull, vaccumInitialData } from "./";

export const dataSlice = createSlice({
    name: 'users',
    initialState: {
        vaccumData: vaccumInitialData,
    },
    reducers: {
        onUpdateVaccumData: ( state, { payload }) => {
            state.vaccumData = payload
        },
    }
});

export const {
    onUpdateVaccumData,
} = dataSlice.actions;

