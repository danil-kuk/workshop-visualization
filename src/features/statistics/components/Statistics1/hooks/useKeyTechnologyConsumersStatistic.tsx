import { GraphModel } from 'src/features/statistics/models'
import { statistic } from 'src/features/statistics/provider'

import { useStatistic } from './useStatistic'

export const useKeyTechnologyConsumersStatistic = (eventId: number) =>
  useStatistic<GraphModel>(() => statistic.getKeyTechnologyConsumersStatistic(eventId), {
    edges: [],
    nodes: [],
  })
