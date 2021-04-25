import { TeamsCountOnCompetenciesModel } from 'src/features/statistics/models'
import { statistic } from 'src/features/statistics/provider'

import { useStatistic } from './useStatistic'

export const useTeamsCountOnCompetenciesStatistic = (eventId: number) =>
  useStatistic<TeamsCountOnCompetenciesModel[]>(() => statistic.getTeamsCountOnCompetenciesStatistic(eventId), [])
