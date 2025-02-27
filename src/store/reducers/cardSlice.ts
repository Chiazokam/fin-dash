import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import type { RootState } from "../index"

export type CardType = { 
    id: string
    balance: number
    cardHolder: string
    expDate: Date
    cardNumber: string
}

export interface CardState {
  cards: CardType[]
  status: 'loading' | 'success' | 'failed'
}

const initialState: CardState = {
  cards: [],
  status: 'loading'
}

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {},

  extraReducers: builder => {
      builder
        .addCase(getCards.pending, state => {
          state.status = "loading"
        })
        .addCase(getCards.fulfilled, (state, action) => {
          state.status = "success"
          state.cards = action.payload
        })
        .addCase(getCards.rejected, state => {
          state.status = "failed"
        })
    },
})

export default cardSlice.reducer

export const cards = (state: RootState) => state.card.cards

export const getCards = createAsyncThunk(
    "card/getCards",
    async () => {
      const response = await fetch("https://67be81c2b2320ee05010585b.mockapi.io/api/v1/cards")
      return response.json()
    },
  )
