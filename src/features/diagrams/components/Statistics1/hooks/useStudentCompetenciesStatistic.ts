import { CompetenceModel } from 'src/features/diagrams/models'
import { statistic } from 'src/features/diagrams/provider'

import { useStatistic } from './useStatistic'

export const useStudentCompetenciesStatistic = (eventId: number) =>
  useStatistic<CompetenceModel[]>(() => statistic.getStudentCompetenciesStatistic(eventId), [])
