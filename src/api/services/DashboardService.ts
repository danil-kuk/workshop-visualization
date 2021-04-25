import { KeyStatisticDto } from '../dtos/KeyStatisticDto'
import { keyStatisticMapper } from '../mappers/KeyStatistic.mapper'

import { database } from './DatabaseService'

const DB_NAME = 'dashboard'
const KEY_STAT_COLLECTION = 'keyStatistic'

async function getKeyStatistic(eventId: number) {
  const item = await database.getItemByEventId<KeyStatisticDto>(DB_NAME, KEY_STAT_COLLECTION, eventId)

  if (!item) {
    return null
  }

  return keyStatisticMapper.fromDto(item)
}

export const dashboardAPI = { getKeyStatistic }
