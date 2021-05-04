import { DashboardDto } from '../dtos/statisticDtos/DashboardDto'
import { dashboardMapper } from '../mappers/Dashboard.mapper'

import { database } from './DatabaseService'

const DB_NAME = 'statistics'
const COLLECTION = 'dashboard'

async function getDashboard(eventID: number) {
  const item = await database
    .getItemByEventId<DashboardDto>(DB_NAME, COLLECTION, eventID)

  if (!item) {
    return null
  }
  return dashboardMapper.fromDto(item)
}

export const dashboardAPI = { getDashboard }
