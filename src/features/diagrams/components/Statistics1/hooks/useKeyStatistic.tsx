import { KeyStatisticModel } from 'src/features/diagrams/models'
import { statistic } from 'src/features/diagrams/provider'

import { useStatistic } from './useStatistic'

export const useKeyStatistic = (eventId: number) =>
  useStatistic<KeyStatisticModel>(() => statistic.getKeyStatistic(eventId), {
    studentsCount: 0,
    customersCount: 0,
    projectsCount: 0,
    teamsCount: 0,
    curatorsCount: 0,
  })
