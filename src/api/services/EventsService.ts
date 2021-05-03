import { EventDto } from '../dtos/EventDto'
import { eventMapper } from '../mappers/Event.mapper'

import { database } from './DatabaseService'

const DB_NAME = 'events'
const COLLECTION_NAME = 'list'

async function getEventsList() {
  const items = await database.getItems<EventDto>(DB_NAME, COLLECTION_NAME)

  return items.map(item => eventMapper.fromDto(item))
}

export const eventsAPI = { getEventsList }
