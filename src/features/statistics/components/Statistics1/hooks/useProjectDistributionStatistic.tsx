import { BubbleChartModel } from 'src/features/statistics/models'
import { statistic } from 'src/features/statistics/provider'

import { useStatistic } from './useStatistic'

export const useProjectDistributionStatistic = (eventId: number) =>
  useStatistic<BubbleChartModel>(() => statistic.getProjectDistributionStatistic(eventId), {
    name: '',
    value: 0,
  })
