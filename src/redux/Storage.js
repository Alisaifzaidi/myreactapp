import { configureStore } from "@reduxjs/toolkit";
import  counterSlice  from "./createSlicer";


export const store = configureStore({
    reducer: {
        counter:counterSlice
    },
  })