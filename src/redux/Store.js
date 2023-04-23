import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./Users";
export const store=configureStore({
    reducer:{
        users:userReducer
    }
})