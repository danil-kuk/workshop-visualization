import { CompetenceModel } from 'src/features/diagrams/models'
import { statistic } from 'src/features/diagrams/provider'

import { useStatistic } from './useStatistic'

export const useProjectCompetenciesStatistic = (eventId: number) =>
  useStatistic<CompetenceModel[]>(() => statistic.getProjectCompetenciesStatistic(eventId), [])
