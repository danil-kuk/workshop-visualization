import { TopCustomerModel } from 'src/features/diagrams/models'
import { statistic } from 'src/features/diagrams/provider'

import { useStatistic } from './useStatistic'

export const useTopCostumersStatistic = (eventId: number) =>
  useStatistic<TopCustomerModel[]>(() => statistic.getTopCostumersStatistic(eventId), [])
