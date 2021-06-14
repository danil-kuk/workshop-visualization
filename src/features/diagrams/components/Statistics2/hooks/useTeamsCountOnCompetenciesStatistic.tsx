import { TeamsCountOnCompetenciesModel } from 'src/features/diagrams/models'
import { statistic } from 'src/features/diagrams/provider'

import { useStatistic } from './useStatistic'

export const useTeamsCountOnCompetenciesStatistic = (eventId: number) =>
  useStatistic<TeamsCountOnCompetenciesModel[]>(() => statistic.getTeamsCountOnCompetenciesStatistic(eventId), [])
