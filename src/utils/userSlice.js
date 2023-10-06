import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:'user',
    initialState: null,
    reducers:{
       addUser:(state,action)=>{
       // console.log('add')
        return action.payload;
       },
       removeUser:(state,action)=>{
        //console.log('remove')
        return null;
       }
    }
}
)

export default userSlice.reducer;
export const{addUser,removeUser}=userSlice.actions;