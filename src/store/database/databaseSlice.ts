import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { API } from 'src/api/services/database'

import { RootState } from '../store'

export const fetchItem = createAsyncThunk(
  'database/fetchItem',
  async (id: string) => {
    const response = await API.getItem(id)

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

export const selectItem = (state: RootState) => state.database.item
