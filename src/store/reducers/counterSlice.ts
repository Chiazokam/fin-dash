// This file demonstrates typical usage of Redux Toolkit's createSlice function
// for defining reducer logic and actions, as well as related thunks and selectors.

import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

import type { RootState } from "../index"

export interface CounterState {
  value: number
  status: "idle" | "loading" | "failed"
}

const initialState: CounterState = {
  value: 0,
  status: "idle",
}

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer

export const selectCount = (state: RootState) => state.counter.value
