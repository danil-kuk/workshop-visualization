import { GraphModel } from 'src/features/diagrams/models'
import { statistic } from 'src/features/diagrams/provider'

import { useStatistic } from './useStatistic'

export const useKeyTechnologyCuratorsStatistic = (eventId: number) =>
  useStatistic<GraphModel>(() => statistic.getKeyTechnologyCuratorsStatistic(eventId), {
    edges: [],
    nodes: [],
  })
