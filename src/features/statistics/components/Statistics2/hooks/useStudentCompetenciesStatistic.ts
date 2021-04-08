import { CompetenceModel } from 'src/features/statistics/models/statistic'
import { statistic } from 'src/features/statistics/provider'

import { useStatistic } from './useStatistic'

export const useStudentCompetenciesStatistic = (eventId: number) =>
  useStatistic<CompetenceModel[]>(() => statistic.getStudentCompetenciesStatistic(eventId), [])
