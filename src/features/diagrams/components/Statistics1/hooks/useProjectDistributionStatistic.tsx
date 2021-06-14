import { BubbleChartModel } from 'src/features/diagrams/models'
import { statistic } from 'src/features/diagrams/provider'

import { useStatistic } from './useStatistic'

export const useProjectDistributionStatistic = (eventId: number) =>
  useStatistic<BubbleChartModel>(() => statistic.getProjectDistributionStatistic(eventId), {
    name: '',
    value: 0,
  })
