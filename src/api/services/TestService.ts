import { DatabaseItemBase } from 'src/models'

import { database } from './DatabaseService'

type TestType = DatabaseItemBase & { name: string }

async function getItem(id: string) {
  const item = await database.getItemById<TestType>(id)

  if (!item) {
    return null
  }

  return { name: item.name }
}

export const testAPI = { getItem }
