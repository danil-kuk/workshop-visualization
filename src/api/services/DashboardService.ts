import { keyStatisticMapper } from '../mappers/KeyStatistic.mapper'
import { DashboardDto } from '../dtos/DashboardDto'
import { customersTopMapper } from '../mappers/CustomersTop.mapper'

import { database } from './DatabaseService'

const DB_NAME = 'statistics'
const COLLECTION = 'dashboard'

async function getKeyStatistic(eventId: number) {
  const item = await database
    .getItemByEventId<DashboardDto>(DB_NAME, COLLECTION, eventId)

  if (!item) {
    return null
  }

  return keyStatisticMapper.fromDto(item)
}

async function getCustomersTop(eventId: number) {
  const item = await database
    .getItemByEventId<DashboardDto>(DB_NAME, COLLECTION, eventId)

  if (!item) {
    return null
  }

  return customersTopMapper.fromDto(item)
}

export const dashboardAPI = {
  getKeyStatistic,
  getCustomersTop,
}
