import { ObjectId } from 'bson'

import { KeyStatisticDto } from '../dtos/KeyStatisticDto'
import { keyStatisticMapper } from '../mappers/KeyStatistic.mapper'

import { database } from './DatabaseService'

const DB_NAME = 'dashboard'
const KEY_STAT_COLLECTION = 'keyStatistic'

async function getKeyStatistic() {
  // TODO (Danil K): Id for testing only.
  const testId = ObjectId.createFromHexString('605f04bda559b036e051d558')
  const item = await database.getItemById<KeyStatisticDto>(DB_NAME, KEY_STAT_COLLECTION, testId)

  if (!item) {
    return null
  }

  return keyStatisticMapper.fromDto(item)
}

export const dashboardAPI = { getKeyStatistic }
