import { GraphModel } from 'src/features/diagrams/models'
import { statistic } from 'src/features/diagrams/provider'

import { useStatistic } from './useStatistic'

export const useKeyTechnologyConsumersStatistic = (eventId: number) =>
  useStatistic<GraphModel>(() => statistic.getKeyTechnologyConsumersStatistic(eventId), {
    edges: [],
    nodes: [],
  })
