import { configureStore } from "@reduxjs/toolkit";
import {setupListeners} from '@reduxjs/toolkit/query';
import userReducer  from './slice/User';

const store = configureStore({
    reducer : {
        user: userReducer,
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
setupListeners(store.dispatch);
export default store

