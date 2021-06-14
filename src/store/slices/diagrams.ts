import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { diagramsAPI } from 'src/api/services/DiagramsService'
import { DiagramsModel } from 'src/models'

import { RootState } from '../store'

export const fetchDiagrams = createAsyncThunk(
  'diagrams/fetch',
  async (eventId: number) => {
    const diagrams = await diagramsAPI.getDiagrams(eventId)

    return {
      eventId,
      diagrams,
    }
  },
)

interface DiagramsState {
  loading: boolean
  data: Record<number, PartialNull<DiagramsModel>>
}

const initialState: DiagramsState = {
  loading: true,
  data: {},
}

const diagramsSlice = createSlice({
  name: 'diagrams',
  initialState,
  reducers: {},
  extraReducers: builder => builder
    .addCase(fetchDiagrams.pending, (state) => {
      state.loading = true
    })
    .addCase(fetchDiagrams.fulfilled, (state, action) => {
      const { eventId, diagrams } = action.payload

      if (diagrams) {
        state.data[eventId] = diagrams
      }

      state.loading = false
    }),
})

const selectLoading = (state: RootState) => state.diagrams.loading
const selectDiagramsData = (eventId: number) => (state: RootState) => state.diagrams.data[eventId]

export {
  diagramsSlice,
  selectLoading,
  selectDiagramsData,
}
