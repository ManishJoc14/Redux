import { createAction, createReducer } from "@reduxjs/toolkit";

const increase = createAction("reward/increase");

const initialState = {
  reward: 0,
};

const rewardReducer = createReducer(initialState, (builder) => {
  builder.addCase(increase, (state) => {
    state.reward += 1;
  });
});

export { increase };
export default rewardReducer;
