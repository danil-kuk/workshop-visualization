import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { eventsAPI } from 'src/api/services/EventsService'
import { EventModel } from 'src/models'

import { RootState } from '../store'

export const fetchEventsList = createAsyncThunk(
  'events/fetchEventsList',
  eventsAPI.getEventsList,
)


interface EventsState {
  list: EventModel[]
}

const initialState: EventsState = { list: [] }

export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {},
  extraReducers: builder => builder
    .addCase(fetchEventsList.fulfilled, (state, action) => {
      state.list = action.payload
    }),
})

export const selectEventsList = (state: RootState) => state.events.list
