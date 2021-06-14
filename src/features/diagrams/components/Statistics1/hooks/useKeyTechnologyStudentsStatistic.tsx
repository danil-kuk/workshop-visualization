import { KeyTechnologyStudentsModel } from 'src/features/diagrams/models'
import { statistic } from 'src/features/diagrams/provider'

import { useStatistic } from './useStatistic'

export const useKeyTechnologyStudentsStatistic = (eventId: number) =>
  useStatistic<KeyTechnologyStudentsModel[]>(() => statistic.getKeyTechnologyStudentsStatistic(eventId), [])
