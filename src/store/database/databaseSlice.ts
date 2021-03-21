import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getItem } from 'src/api/services/database'

import { RootState } from '../store'

export const fetchItem = createAsyncThunk(
  'database/fetchItem',
  async () => {
    const response = await getItem()

    return response
  },
)

interface TestState {
  item: { name: string } | null
}

const initialState: TestState = { item: null }

export const databaseSlice = createSlice({
  name: 'database',
  initialState,
  reducers: {},
  extraReducers: builder => builder
    .addCase(fetchItem.fulfilled, (state, action) => {
      state.item = action.payload
    }),
})

// Other code such as selectors can use the imported `RootState` type
export const selectItem = (state: RootState) => state.database.item
