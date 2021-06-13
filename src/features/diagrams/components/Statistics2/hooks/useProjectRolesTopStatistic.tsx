import { statistic } from 'src/features/diagrams/provider'

import { useStatistic } from './useStatistic'

export const useProjectRolesTopStatistic = (eventId: number) =>
  useStatistic<string[]>(() => statistic.getProjectRolesTopStatistic(eventId), [])
