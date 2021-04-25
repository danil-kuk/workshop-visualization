import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { dashboardAPI } from 'src/api/services/DashboardService'
import { KeyStatisticModel } from 'src/models'

import { RootState } from '../store'

export const fetchKeyStatistic = createAsyncThunk(
  'dashboard/fetchKeyStatistic',
  (eventId: number) => dashboardAPI.getKeyStatistic(eventId),
)


interface DashboardState {
  keyStatistic: KeyStatisticModel | null
}

const initialState: DashboardState = { keyStatistic: null }

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
