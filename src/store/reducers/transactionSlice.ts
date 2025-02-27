import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import type { RootState } from "../index"

export type TransactionType = { 
    id: string
    transactionTitle: string
    transactionType: string
    recipientName: string
    amount: number
    createdAt: Date
}

export interface TransactionState {
  transactions: TransactionType[]
  status: 'loading' | 'success' | 'failed'
}

const initialState: TransactionState = {
  transactions: [],
  status: 'loading'
}

export const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {},

  extraReducers: builder => {
      builder
        .addCase(getTransactions.pending, state => {
          state.status = "loading"
        })
        .addCase(getTransactions.fulfilled, (state, action) => {
          state.status = "success"
          state.transactions = action.payload
        })
        .addCase(getTransactions.rejected, state => {
          state.status = "failed"
        })
    },
})

export default transactionSlice.reducer

export const transactions = (state: RootState) => state.transaction.transactions

export const getTransactions = createAsyncThunk(
    "transaction/getTransactions",
    async () => {
      const response = await fetch("https://67c07533b9d02a9f2249d61d.mockapi.io/api/v1/transactions")
      return response.json()
    },
  )
