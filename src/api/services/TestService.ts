import { DatabaseItemBase } from '../dtos/DatabaseItemBase'

import { database } from './DatabaseService'

const COLLECTION_NAME = 'listingsAndReviews'
const DB_NAME = 'sample_airbnb'

type TestType = DatabaseItemBase & { name: string }

async function getItem(id: string) {
  const item = await database.getItemById<TestType>(DB_NAME, COLLECTION_NAME, id)

  if (!item) {
    return null
  }

  return { name: item.name }
}

async function getList() {
  const items = await database.getItems<TestType>(DB_NAME, COLLECTION_NAME)

  return items.map(item => ({
    id: item._id,
    name: item.name,
  }))
}

export const testAPI = {
  getItem,
  getList,
}
