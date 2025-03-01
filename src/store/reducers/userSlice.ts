import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../index"

export type UserType = {
  id: string
  name: string
  userName: string
  email: string
  password: string
  dob: string
  presentAddress: string
  permAddress: string
  city: string
  postalCode: string
  country: string
  avatar: string
  role: string
}
export interface UserState {
  loggedInUser: UserType,
  users: UserType[],
  selectedContact: Pick<UserType, 'id' | 'name' | 'avatar' | 'role'>,
  status: 'loading' | 'success' | 'failed'
}

const initialState: UserState = {
  loggedInUser: {
    id: '',
    name: '',
    userName: '',
    email: '',
    password: '',
    dob: '',
    presentAddress: '',
    permAddress: '',
    city: '',
    postalCode: '',
    country: '',
    role: '',
    avatar: ''
  },
  selectedContact: {
    id: '',
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
      .addCase(getLoggedInUser.fulfilled, (state, action) => {
        state.status = "success"
        state.loggedInUser = action.payload
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.status = "success"
        state.users = action.payload
      })
      .addCase(editUser.pending, (state) => {
        state.status = "loading"
      })
      .addCase(editUser.fulfilled, (state) => {
        state.status = "success"
      })
      .addCase(editUser.rejected, (state) => {
        state.status = "failed"
      })
  },
})

export default userSlice.reducer
export const { setActiveUser } = userSlice.actions

export const selectUser = (state: RootState) => state.user.loggedInUser
export const users = (state: RootState) => state.user.users
export const selectedContact = (state: RootState) => state.user.selectedContact
export const status = (state: RootState) => state.user.status

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

  export const editUser = createAsyncThunk(
    "user/editUser",
    async (user: UserType) => {
      const response = await fetch(`https://67be81c2b2320ee05010585b.mockapi.io/api/v1/users/${user.id}`, {
      method: 'PUT',
      headers: {'content-type':'application/json'},
      body: JSON.stringify(user)
    })
      return response.json()
    },
  )
