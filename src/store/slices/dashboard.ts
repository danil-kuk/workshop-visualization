import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { dashboardAPI } from 'src/api/services/DashboardService'
import { KeyStatisticModel } from 'src/models'

import { RootState } from '../store'

export const fetchKeyStatistic = createAsyncThunk(
  'dashboard/fetchKeyStatistic',
  dashboardAPI.getKeyStatistic,
)


interface TestState {
  keyStatistic: KeyStatisticModel | null
}

const initialState: TestState = { keyStatistic: null }

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {},
  extraReducers: builder => builder
    .addCase(fetchKeyStatistic.fulfilled, (state, action) => {
      state.keyStatistic = action.payload
    }),
})

export const selectKeyStatistic = (state: RootState) => state.dashboard.keyStatistic
