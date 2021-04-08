import { KeyTechnologyStudentsModel } from 'src/features/statistics/models/statistic/KeyTechnologyStudentsModel'
import { statistic } from 'src/features/statistics/provider'

import { useStatistic } from './useStatistic'

export const useKeyTechnologyStudentsStatistic = (eventId: number) =>
  useStatistic<KeyTechnologyStudentsModel[]>(() => statistic.getKeyTechnologyStudentsStatistic(eventId), [])
