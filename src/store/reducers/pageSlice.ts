import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../index"

interface Page { 
    id: string
    title: string
}

export interface PageState {
  pages: Page[]
  activePage: Page
}

const initialState: PageState = {
  pages: [
    {
        id: 'overview',
        title: 'dashboard'
    },
    {
        id: 'transactions',
        title: 'transactions'
    },
    {
        id: 'accounts',
        title: 'accounts'
    },
    {
        id: 'investments',
        title: 'investments'
    },
    {
        id: 'cards',
        title: 'credit cards'
    },
    {
        id: 'loans',
        title: 'loans'
    },
    {
        id: 'services',
        title: 'services'
    },
    {
        id: 'privileges',
        title: 'my privileges'
    },
    {
        id: 'setting',
        title: 'setting'
    }
  ],
  activePage: {
    id: 'overview',
    title: 'dashboard',
  }
}

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setActivePage: (state, action: PayloadAction<string>) => {
        state.activePage = state.pages.find(page => page.id === action.payload) || state.pages[0]
      },
  },
})

export const { setActivePage } = pageSlice.actions
export default pageSlice.reducer

export const activePage = (state: RootState) => state.page.activePage
