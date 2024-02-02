import { createSlice } from "@reduxjs/toolkit";

const appSlice =createSlice({

    name:"app",
    initialState:{
        isMenuOpen:true,
        theme:true,
        Live:false,
    },
    reducers:{
        toggleMenu:(state)=>{
            state.isMenuOpen =!state.isMenuOpen;
        },
        closeMenu:(state)=>{
            state.isMenuOpen=false;
        },
        openMenu: (state) => {
            state.isMenuOpen = true;
          },
          toggleLive: (state) => {
            state.Live = !state.Live;
          },
        toggleTheme:(state)=>{
            state.theme=!state.theme;
        },
        setLive:(state,action)=>{
            state.Live=action.payload;
        }
    },
});

export const {toggleLive,toggleMenu,closeMenu,toggleTheme,openMenu,setLive}=appSlice.actions;
export default appSlice.reducer;