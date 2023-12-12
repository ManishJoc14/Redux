import { createAction, createSlice } from "@reduxjs/toolkit";

const account_incrementByAmount = createAction('account/increaseByAmount');

const initialState = {
    points : 0
};

const bonusSlice = createSlice({
    name : "bonus",
    initialState,
    reducers: {
        increase : (state)=>{     // bonus/increase
            state.points +=1;
        }
    },
    extraReducers: (builder)=>{  //incase we want change state of this slice from actions which are not in this slice 
        builder.addCase(account_incrementByAmount, (state, action)=>{      // like : incrasing points if action is account/increaseByAmount with payload >= 100
                if(action.payload >= 100){
                    state.points+=1;
                }
        })
    }
})

export const { increase } = bonusSlice.actions;
export default bonusSlice.reducer;
