import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import type { RootState } from "../index"

export interface UserState {
  user: {
    name: string
    avatar: string
  }
  status: 'loading' | 'success' | 'failed'
}

const initialState: UserState = {
  user: {
    name: '',
    avatar: ''
  },
  status: 'loading'
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder
      .addCase(getLoggedInUser.pending, state => {
        state.status = "loading"
      })
      .addCase(getLoggedInUser.fulfilled, (state, action) => {
        state.status = "success"
        state.user = action.payload
      })
      .addCase(getLoggedInUser.rejected, state => {
        state.status = "failed"
      })
  },
})

export default userSlice.reducer

export const selectUser = (state: RootState) => state.user.user

export const getLoggedInUser = createAsyncThunk(
    "user/getLoggedInUser",
    async () => {
      const response = await fetch("https://67be81c2b2320ee05010585b.mockapi.io/api/v1/users/1")
      return response.json()
    },
  )
