import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { dashboardAPI } from 'src/api/services/DashboardService'
import {
  CustomersByActivityModel, CustomersByAreaModel,
  CustomersTopModel,
  KeyStatisticModel,
  KeyTechnologyStudentsModel,
  StudentCompetenciesModel, StudentsByCourseModel,
  TypicalTeamModel,
} from 'src/models'

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
  loading: boolean
  keyStatistic: KeyStatisticModel | null
  customersTop: CustomersTopModel[] | null
  typicalTeam: TypicalTeamModel[] | null
  studentCompetencies: StudentCompetenciesModel[] | null
  desiredStudentCompetencies: StudentCompetenciesModel[] | null
  keyTechnologyStudents: KeyTechnologyStudentsModel[] | null
  studentsByCourse: StudentsByCourseModel[] | null
  customersByActivity: CustomersByActivityModel[] | null
  customersByArea: CustomersByAreaModel[] | null
}

const initialState: DashboardState = {
  loading: true,
  keyStatistic: null,
  customersTop: null,
  typicalTeam: null,
  studentCompetencies: null,
  desiredStudentCompetencies: null,
  keyTechnologyStudents: null,
  studentsByCourse: null,
  customersByActivity: null,
  customersByArea: null,
}

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {},
  extraReducers: builder => builder
    .addCase(fetchDashboard.pending, (state) => {
      state.loading = true
    })
    .addCase(fetchDashboard.fulfilled, (state, action) => {
      state.keyStatistic = action.payload?.keyStatistic === undefined ? null : action.payload.keyStatistic
      state.customersTop = action.payload?.customersTop === undefined ? null : action.payload.customersTop
      state.typicalTeam = action.payload?.typicalTeam === undefined ? null : action.payload.typicalTeam
      state.studentCompetencies = action.payload?.studentCompetencies === undefined ? null : action.payload.studentCompetencies
      state.desiredStudentCompetencies = action.payload?.desiredStudentCompetencies === undefined ? null : action.payload.desiredStudentCompetencies
      state.keyTechnologyStudents = action.payload?.keyTechnologyStudents === undefined ? null : action.payload.keyTechnologyStudents
      state.studentsByCourse = action.payload?.studentsByCourse === undefined ? null : action.payload.studentsByCourse
      state.customersByActivity = action.payload?.customersByActivity === undefined ? null : action.payload.customersByActivity
      state.customersByArea = action.payload?.customersByArea === undefined ? null : action.payload.customersByArea
      state.loading = false
    }),
})

export const selectLoading = (state: RootState) => state.dashboard.loading
export const selectKeyStatistic = (state: RootState) => state.dashboard.keyStatistic
export const selectCustomersTop = (state: RootState) => state.dashboard.customersTop
export const selectTypicalTeam = (state: RootState) => state.dashboard.typicalTeam
export const selectStudentCompetencies = (state: RootState) => state.dashboard.studentCompetencies
export const selectDesiredStudentCompetencies = (state: RootState) => state.dashboard.desiredStudentCompetencies
export const selectKeyTechnologyStudents = (state: RootState) => state.dashboard.keyTechnologyStudents
export const selectStudentsByCourse = (state: RootState) => state.dashboard.studentsByCourse
export const selectCustomersByActivity = (state: RootState) => state.dashboard.customersByActivity
export const selectCustomersByArea = (state: RootState) => state.dashboard.customersByArea
