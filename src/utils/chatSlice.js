// import { createSlice } from "@reduxjs/toolkit";
// import { OFFSET_LIVE_CHAT } from "./constants";


// const chatSlice= createSlice({

//     name:'chat',
//     initialState:{
//         messages:[],
//     },

//     reducers:{
//         addMessage:(state,action)=>{
//             state.messages.splice(OFFSET_LIVE_CHAT,1);
//             state.messages.push(action.payload);
//         },
//     },
// });


// export const {addMessage}=chatSlice.actions
// export default chatSlice.reducer;

// //1
// //add slice to store in store .js
// //see in wo gola wala jo window mei aaya k nhi chat waha jaake
// //ab dispatch action karna hoga kaha hoga livechat mei (api polling jaha likhe hai) use effect k upper karna hai
// //dispatch an ction know in use effrct
// //ab map use karne k liye we have to use useSelector() dispatch k nice use effect k upper very critcal part


import { createSlice } from "@reduxjs/toolkit";
// import { } from "./constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      if (state.messages.length === 50)
        state.messages.splice(0, 1);
      state.messages.push(action.payload);

      // ye method kerna hai to ui me reverse se map kerna hoga
      // state.messages.splice(LIVE_CHAT_COUNT, 1);
      // state.messages.unshift(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
