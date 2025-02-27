import type { Action, ThunkAction } from "@reduxjs/toolkit"
import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./reducers/userSlice"
import pageReducer from "./reducers/pageSlice"
import cardReducer from "./reducers/cardSlice"
import transactionReducer from "./reducers/transactionSlice"

export const store = configureStore({
  reducer: {
    user: userReducer,
    page: pageReducer,
    card: cardReducer,
    transaction: transactionReducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['user/getLoggedInUser/fulfilled'],
      },
    }),
})

export type AppStore = typeof store

export type RootState = ReturnType<AppStore["getState"]>

export type AppDispatch = AppStore["dispatch"]

export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>
