import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { dashboardSlice } from './slices/dashboard'
import { eventsSlice } from './slices/events'

export const store = configureStore({
  reducer: {
    dashboard: dashboardSlice.reducer,
    events: eventsSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
