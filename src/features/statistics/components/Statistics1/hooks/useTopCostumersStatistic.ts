import { TopCustomerModel } from 'src/features/statistics/models'
import { statistic } from 'src/features/statistics/provider'

import { useStatistic } from './useStatistic'

export const useTopCostumersStatistic = (eventId: number) =>
  useStatistic<TopCustomerModel[]>(() => statistic.getTopCostumersStatistic(eventId), [])
