import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { dashboardAPI } from 'src/api/services/DashboardService'
import { CustomersTopModel, KeyStatisticModel, TypicalTeamModel } from 'src/models'

import { RootState } from '../store'

export const fetchDashboard = createAsyncThunk(
  'dashboard/fetchDashboard',
  (eventId: number) => dashboardAPI.getDashboard(eventId),
)

// export const fetchKeyStatistic = createAsyncThunk(
//   'dashboard/fetchKeyStatistic',
//   (eventId: number) => dashboardAPI.getKeyStatistic(eventId),
// )
//
// export const fetchCustomersTop = createAsyncThunk(
//   'dashboard/fetchCustomersTop',
//   (eventId: number) => dashboardAPI.getCustomersTop(eventId),
// )


interface DashboardState {
  keyStatistic: KeyStatisticModel | null
  customersTop: CustomersTopModel[] | null
  typicalTeam: TypicalTeamModel[] | null
}

const initialState: DashboardState = {
  keyStatistic: null,
  customersTop: null,
  typicalTeam: null,
}

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {},
  extraReducers: builder => builder
    .addCase(fetchDashboard.fulfilled, (state, action) => {
      state.keyStatistic = action.payload?.keyStatistic === undefined ? null : action.payload.keyStatistic
      state.customersTop = action.payload?.customersTop === undefined ? null : action.payload.customersTop
      state.typicalTeam = action.payload?.typicalTeam === undefined ? null : action.payload.typicalTeam
    }),
})

export const selectKeyStatistic = (state: RootState) => state.dashboard.keyStatistic
export const selectCustomersTop = (state: RootState) => state.dashboard.customersTop
export const selectTypicalTeam = (state: RootState) => state.dashboard.typicalTeam
