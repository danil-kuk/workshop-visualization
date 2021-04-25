import { GraphModel } from 'src/features/statistics/models/statistic'
import { statistic } from 'src/features/statistics/provider'

import { useStatistic } from './useStatistic'

export const useKeyTechnologyCuratorsStatistic = (eventId: number) =>
  useStatistic<GraphModel>(() => statistic.getKeyTechnologyCuratorsStatistic(eventId), {
    edges: [],
    nodes: [],
  })
