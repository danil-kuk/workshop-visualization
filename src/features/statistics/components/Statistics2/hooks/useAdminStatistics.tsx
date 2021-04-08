import { MonitoringModel } from 'src/features/statistics/models'
import { admin } from 'src/features/statistics/provider'

import { useStatistic } from './useStatistic'

export const useAdminStatistics = () =>
  useStatistic<MonitoringModel[]>(() => admin.getStatistics(), [])
