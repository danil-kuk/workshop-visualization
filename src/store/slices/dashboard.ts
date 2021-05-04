import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { dashboardAPI } from 'src/api/services/DashboardService'
import { DashboardModel } from 'src/models'

import { RootState } from '../store'


export const fetchDashboard = createAsyncThunk(
  'dashboard/fetch',
  async (eventId: number) => {
    const dashboard = await dashboardAPI.getDashboard(eventId)

    return {
      eventId,
      dashboard,
    }
  },
)

interface DashboardState {
  loading: boolean
  data: Record<number, PartialNull<DashboardModel>>
}

const initialState: DashboardState = {
  loading: true,
  data: {},
}

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {},
  extraReducers: builder => builder
    .addCase(fetchDashboard.pending, (state) => {
      state.loading = true
    })
    .addCase(fetchDashboard.fulfilled, (state, action) => {
      const { eventId, dashboard } = action.payload

      if (dashboard) {
        state.data[eventId] = dashboard
      }

      state.loading = false
    }),
})

const selectLoading = (state: RootState) => state.dashboard.loading
const selectDashboardData = (eventId: number) => (state: RootState) => state.dashboard.data[eventId]

export {
  dashboardSlice,
  selectLoading,
  selectDashboardData,
}
