import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { dataSlice } from "../data";
import { collectedDataSlice } from "../collectedData";
import { processSlice } from "../processes";

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    data: dataSlice.reducer,
    collectedData: collectedDataSlice.reducer,
    processes: processSlice.reducer
})

export const persistedReducer = persistReducer(persistConfig, rootReducer);