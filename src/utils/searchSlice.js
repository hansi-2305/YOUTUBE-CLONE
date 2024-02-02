import { createSlice } from "@reduxjs/toolkit";

const searchSlice =createSlice({

    name:"search",
    initialState:{
        categoryByVideos:null,
        searchCache:{},
        liveVideos:null,
        searchedResults:null,

    },
    reducers:{
        cacheResults:(state,action)=>{

         
            // state={...state,action.payload};

            // state =Object.assign(state,action.payload)
            const key = Object.keys(action.payload)[0]; // Get the single key
            const valueArray = action.payload[key]; // Get the array value
      
            state.searchCache[key] = valueArray;

        },
        
         addSearchedVideo:(state,action)=>{
            state.searchedResults = action.payload;
                
        },

        
        addCategoryByVideos:(state,action)=>{
            state.categoryByVideos=action.payload;
        },
        addLiveVideos:(state,action)=>{
            state.liveVideos=action.payload;
        },
    }

});


export const {cacheResults,addCategoryByVideos,addSearchedVideo,addLiveVideos}=searchSlice.actions;
export default searchSlice.reducer


//LRU cache tree struacture pyramid of doom