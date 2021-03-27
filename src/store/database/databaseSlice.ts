import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { testAPI } from 'src/api/services/TestService'

import { RootState } from '../store'

export const fetchItem = createAsyncThunk(
  'database/fetchItem',
  async (id: string) => {
    const response = await testAPI.getItem(id)

    return response
  },
)

export const fetchItems = createAsyncThunk(
  'database/fetchItems',
  async () => {
    const response = await testAPI.getList()

    return response
  },
)


interface TestState {
  item: { name: string } | null
  list: { name: string }[] | null
}

const initialState: TestState = {
  item: null,
  list: null,
}

export const databaseSlice = createSlice({
  name: 'database',
  initialState,
  reducers: {},
  extraReducers: builder => builder
    .addCase(fetchItem.fulfilled, (state, action) => {
      state.item = action.payload
    })
    .addCase(fetchItems.fulfilled, (state, action) => {
      state.list = action.payload
    }),
})

export const selectItem = (state: RootState) => state.database.item
export const selectList = (state: RootState) => state.database.list
