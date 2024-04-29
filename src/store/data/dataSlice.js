import { createSlice } from "@reduxjs/toolkit";
import { vaccumDataNull } from "./";

export const dataSlice = createSlice({
    name: 'users',
    initialState: {
        vaccumData: vaccumDataNull,
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

