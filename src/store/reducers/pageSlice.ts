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
        id: 'Overview',
        title: 'Dashboard'
    },
    {
        id: 'Transactions',
        title: 'Transactions'
    },
    {
        id: 'Accounts',
        title: 'Accounts'
    },
    {
        id: 'Investments',
        title: 'Investments'
    },
    {
        id: 'Cards',
        title: 'Credit Cards'
    },
    {
        id: 'Loans',
        title: 'Loans'
    },
    {
        id: 'Services',
        title: 'Services'
    },
    {
        id: 'Privileges',
        title: 'My Privileges'
    },
    {
        id: 'Setting',
        title: 'Setting'
    }
  ],
  activePage: {
    id: 'Overview',
    title: 'Dashboard',
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
