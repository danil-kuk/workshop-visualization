import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { counterSlice } from './counter/counterSlice'
import { databaseSlice } from './database/databaseSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    database: databaseSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
