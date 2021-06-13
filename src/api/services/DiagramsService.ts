import { DiagramsDto } from '../dtos/diagramsDto/DiagramsDto'
import { diagramsMapper } from '../mappers/Diagrams.mapper'

import { database } from './DatabaseService'

const DB_NAME = 'statistics'
const COLLECTION = 'diagrams'

async function getDiagrams(eventID: number) {
  const item = await database
    .getItemByEventId<DiagramsDto>(DB_NAME, COLLECTION, eventID)

  if (!item) {
    return null
  }
  return diagramsMapper.fromDto(item)
}

export const diagramsAPI = { getDiagrams }
