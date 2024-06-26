import { configureStore } from "@reduxjs/toolkit";
import { persistedReducer } from "./persiststore";
import { persistStore } from "redux-persist";

export const store = configureStore({
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false,
    }),
    reducer: persistedReducer,
});

export const persistor = persistStore(store);