// import { keyStatisticMapper } from '../mappers/KeyStatistic.mapper'
import { DashboardDto } from '../dtos/DashboardDto'
// import { customersTopMapper } from '../mappers/CustomersTop.mapper'
// import { typicalTeamMapper } from '../mappers/TypicalTeam.mapper'
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

// async function getKeyStatistic(eventId: number) {
//   const item = await database
//     .getItemByEventId<DashboardDto>(DB_NAME, COLLECTION, eventId)
//
//   if (!item) {
//     return null
//   }
//
//   return keyStatisticMapper.fromDto(item)
// }
//
// async function getCustomersTop(eventId: number) {
//   const item = await database
//     .getItemByEventId<DashboardDto>(DB_NAME, COLLECTION, eventId)
//
//   if (!item) {
//     return null
//   }
//
//   return customersTopMapper.fromDto(item)
// }
//
// async function getTypicalTeam(eventId: number) {
//   const item = await database
//     .getItemByEventId<DashboardDto>(DB_NAME, COLLECTION, eventId)
//
//   if (!item) {
//     return null
//   }
//
//   return typicalTeamMapper.fromDto(item)
// }

export const dashboardAPI = {
  getDashboard,
  // getKeyStatistic,
  // getCustomersTop,
  // getTypicalTeam,
}
