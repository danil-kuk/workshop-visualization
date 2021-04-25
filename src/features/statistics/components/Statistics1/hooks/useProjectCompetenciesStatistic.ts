import { CompetenceModel } from 'src/features/statistics/models'
import { statistic } from 'src/features/statistics/provider'

import { useStatistic } from './useStatistic'

export const useProjectCompetenciesStatistic = (eventId: number) =>
  useStatistic<CompetenceModel[]>(() => statistic.getProjectCompetenciesStatistic(eventId), [])
