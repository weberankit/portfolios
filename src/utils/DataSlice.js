import { createSlice } from "@reduxjs/toolkit";

const DataSlice=createSlice({
    name:"dataSlices",
    initialState:{
        value:[],
        question:[]
    },
    reducers:{
     addData:(state,action)=>{
        if(action.payload === "close"){
            state.value.length=0
            state.question.length=0
        }else{
             state.value.push(action.payload)
        }

       
     },
     addQuestion:(state,action)=>{
        state.question.push(action.payload)
     }
    }
})
export default DataSlice.reducer
export const {addData,addQuestion} = DataSlice.actions