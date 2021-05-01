import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { dashboardAPI } from 'src/api/services/DashboardService'
import { CustomersTopModel, KeyStatisticModel } from 'src/models'

import { RootState } from '../store'

export const fetchKeyStatistic = createAsyncThunk(
  'dashboard/fetchKeyStatistic',
  (eventId: number) => dashboardAPI.getKeyStatistic(eventId),
)

export const fetchCustomersTop = createAsyncThunk(
  'dashboard/fetchCustomersTop',
  (eventId: number) => dashboardAPI.getCustomersTop(eventId),
)


interface DashboardState {
  keyStatistic: KeyStatisticModel | null
  customersTop: CustomersTopModel[] | null
}

const initialState: DashboardState = {
  keyStatistic: null,
  customersTop: null,
}

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {},
  extraReducers: builder => builder
    .addCase(fetchKeyStatistic.fulfilled, (state, action) => {
      state.keyStatistic = action.payload
    })
    .addCase(fetchCustomersTop.fulfilled, (state, action) => {
      state.customersTop = action.payload
    }),
})

export const selectKeyStatistic = (state: RootState) => state.dashboard.keyStatistic
export const selectCustomersTop = (state: RootState) => state.dashboard.customersTop
