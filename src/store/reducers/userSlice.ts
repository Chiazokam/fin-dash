import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../index"

export type UserType = {
  name: string
  avatar: string
  role: string
}
export interface UserState {
  loggedInUser: UserType,
  users: UserType[],
  selectedContact: UserType,
  status: 'loading' | 'success' | 'failed'
}

const initialState: UserState = {
  loggedInUser: {
    name: '',
    avatar: '',
    role: ''
  },
  selectedContact: {
    name: '',
    avatar: '',
    role: ''
  },
  users: [],
  status: 'loading'
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setActiveUser: (state, action: PayloadAction<UserType>) => {
      state.selectedContact = action.payload
    },
  },

  extraReducers: builder => {
    builder
      .addCase(getLoggedInUser.pending, state => {
        state.status = "loading"
      })
      .addCase(getLoggedInUser.fulfilled, (state, action) => {
        state.status = "success"
        state.loggedInUser = action.payload
      })
      .addCase(getLoggedInUser.rejected, state => {
        state.status = "failed"
      })
      .addCase(getAllUsers.pending, state => {
        state.status = "loading"
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.status = "success"
        state.users = action.payload
      })
      .addCase(getAllUsers.rejected, state => {
        state.status = "failed"
      })
  },
})

export default userSlice.reducer

export const selectUser = (state: RootState) => state.user.loggedInUser
export const users = (state: RootState) => state.user.users
export const selectedContact = (state: RootState) => state.user.selectedContact

export const getLoggedInUser = createAsyncThunk(
    "user/getLoggedInUser",
    async () => {
      const response = await fetch("https://67be81c2b2320ee05010585b.mockapi.io/api/v1/users/1")
      return response.json()
    },
  )

  export const getAllUsers = createAsyncThunk(
    "user/getAllUsers",
    async () => {
      const response = await fetch("https://67be81c2b2320ee05010585b.mockapi.io/api/v1/users")
      return response.json()
    },
  )
