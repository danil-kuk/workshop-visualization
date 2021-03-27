import * as Realm from 'realm-web'
import { DatabaseItemBase } from 'src/models'

import {
  APP_ID,
  MONGO_CLIENT,
  PUBLIC_API_KEY,
} from './DatabaseConfig'

const app = new Realm.App(APP_ID)

function getMongoDB() {
  const mongodb = app.currentUser?.mongoClient(MONGO_CLIENT)

  if (!mongodb) {
    throw Error('Database connection error! Unable to create MongoDB Client.')
  }

  return mongodb
}

function login() {
  const credentials = Realm.Credentials.apiKey(PUBLIC_API_KEY)

  return app.logIn(credentials, false)
}

/**
 * Get item from selected db and collection by id.
 * @param dbName Database name.
 * @param collectionName Collection name.
 * @param _id Item id.
 */
async function getItemById<T extends DatabaseItemBase>(
  dbName: string,
  collectionName: string,
  _id: string,
): Promise<T | null> {
  const mongodb = getMongoDB()
  const collection = mongodb.db(dbName).collection<T>(collectionName)

  const result = await collection.findOne({ _id })

  return result
}

export const database = {
  login,
  getItemById,
}
