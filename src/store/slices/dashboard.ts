import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { dashboardAPI } from 'src/api/services/DashboardService'
import {
  CustomersByActivityModel,
  CustomersByAreaModel,
  CustomersTopModel,
  KeyStatisticModel,
  KeyTechnologyStudentsModel,
  StudentCompetenciesModel,
  StudentsByCourseModel,
  TypicalTeamModel,
} from 'src/models'

import { RootState } from '../store'


export const fetchDashboard = createAsyncThunk(
  'dashboard/fetchDashboard',
  (eventId: number) => dashboardAPI.getDashboard(eventId),
)

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

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {},
  extraReducers: builder => builder
    .addCase(fetchDashboard.pending, (state) => {
      state.loading = true
    })
    .addCase(fetchDashboard.fulfilled, (state, action) => {
      state.keyStatistic = action.payload?.keyStatistic ?? null
      state.customersTop = action.payload?.customersTop ?? null
      state.typicalTeam = action.payload?.typicalTeam ?? null
      state.studentCompetencies = action.payload?.studentCompetencies ?? null
      state.desiredStudentCompetencies = action.payload?.desiredStudentCompetencies ?? null
      state.keyTechnologyStudents = action.payload?.keyTechnologyStudents ?? null
      state.studentsByCourse = action.payload?.studentsByCourse ?? null
      state.customersByActivity = action.payload?.customersByActivity ?? null
      state.customersByArea = action.payload?.customersByArea ?? null
      state.loading = false
    }),
})

const selectLoading = (state: RootState) => state.dashboard.loading
const selectKeyStatistic = (state: RootState) => state.dashboard.keyStatistic
const selectCustomersTop = (state: RootState) => state.dashboard.customersTop
const selectTypicalTeam = (state: RootState) => state.dashboard.typicalTeam
const selectStudentCompetencies = (state: RootState) => state.dashboard.studentCompetencies
const selectDesiredStudentCompetencies = (state: RootState) => state.dashboard.desiredStudentCompetencies
const selectKeyTechnologyStudents = (state: RootState) => state.dashboard.keyTechnologyStudents
const selectStudentsByCourse = (state: RootState) => state.dashboard.studentsByCourse
const selectCustomersByActivity = (state: RootState) => state.dashboard.customersByActivity
const selectCustomersByArea = (state: RootState) => state.dashboard.customersByArea

export {
  dashboardSlice,
  selectLoading,
  selectKeyStatistic,
  selectCustomersTop,
  selectTypicalTeam,
  selectStudentCompetencies,
  selectDesiredStudentCompetencies,
  selectKeyTechnologyStudents,
  selectStudentsByCourse,
  selectCustomersByActivity,
  selectCustomersByArea,
}
