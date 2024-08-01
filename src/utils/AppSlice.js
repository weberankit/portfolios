import { configureStore } from "@reduxjs/toolkit";
import DataSlice from "./DataSlice";
const AppSlice = configureStore({
    reducer:{
        
dataSlice:DataSlice
    }
})
export default AppSlice