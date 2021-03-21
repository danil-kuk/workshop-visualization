import * as Realm from 'realm-web'
import {
  APP_ID,
  MONGO_CLIENT,
  PUBLIC_API_KEY,
} from 'src/dbConfig'
import { DatabaseItemBase } from 'src/models'
import { repeatAsyncRequestOnError } from 'src/utils/repeatAsyncRequestOnError'

const app = new Realm.App(APP_ID)

async function getMongoDB() {
  let user = app.currentUser

  if (!user) {
    user = await login()
  }

  return user.mongoClient(MONGO_CLIENT)
}

async function login() {
  const credentials = Realm.Credentials.apiKey(PUBLIC_API_KEY)

  const user = await app.logIn(credentials, false)

  return user
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
  const mongodb = await getMongoDB()
  const collection = mongodb.db(dbName).collection<T>(collectionName)

  const result = await collection.findOne({ _id })

  return result
}

export const database = { getItemById: repeatAsyncRequestOnError(getItemById) }
