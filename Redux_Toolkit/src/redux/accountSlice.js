import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  amount: 0,
};

export const getUserAccount = createAsyncThunk(
  "account/getUser",
  async (userId, thunkAPI) => {
    //userId was from call of getUserAccount(userId)
    const { data } = await axios.get(
      `http://localhost:4000/accounts/${userId}`
    );
    return data.amount; //amount goes as payload to getUserAccount.fulfilled i.e account/getUser/fulfilled
  } // used to send some data if it is fulfilled
);

const accountSlice = createSlice({
  name: "account", //used to create actions like : account/increase
  initialState,
  reducers: {
    increase: (state) => {
      //used to dispatch actions like : dispatch(increase())
      state.amount += 1;
    },
    decrease: (state) => {
      state.amount -= 1;
    },
    increaseByAmount: (state, action) => {
      state.amount += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserAccount.pending, (state, action) => {
        //account/getUser/pending
        state.pending = true;
      })
      .addCase(getUserAccount.fulfilled, (state, action) => {
        //account/getUser/fulfilled
        state.pending = false;
        state.amount = action.payload; //payload was from return of getUserAccount which was declared using createAsyncThunk 
      })
      .addCase(getUserAccount.rejected, (state, action) => {
        //account/getUser/rejected
        state.error = action.error;
      });
  },
});

export const { increase, decrease, increaseByAmount } = accountSlice.actions; //used to dislpatch actions like : dispatch(increment())
export default accountSlice.reducer; //used to configureStore
