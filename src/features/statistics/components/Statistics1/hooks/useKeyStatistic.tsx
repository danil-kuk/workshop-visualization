import { KeyStatisticModel } from 'src/features/statistics/models'
import { statistic } from 'src/features/statistics/provider'

import { useStatistic } from './useStatistic'

export const useKeyStatistic = (eventId: number) =>
  useStatistic<KeyStatisticModel>(() => statistic.getKeyStatistic(eventId), {
    studentsCount: 0,
    customersCount: 0,
    projectsCount: 0,
    teamsCount: 0,
    curatorsCount: 0,
  })
