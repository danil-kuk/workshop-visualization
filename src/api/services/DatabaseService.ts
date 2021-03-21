import * as Realm from 'realm-web'
import {
  APP_ID,
  COLLECTION_NAME,
  DB_NAME, MONGO_CLIENT,
  PUBLIC_API_KEY,
} from 'src/dbConfig'
import { DatabaseItemBase } from 'src/models'

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

async function getItemById<T extends DatabaseItemBase>(_id: string): Promise<T | null> {
  const mongodb = await getMongoDB()

  const collection = mongodb.db(DB_NAME).collection<T>(COLLECTION_NAME)
  const result = await collection.findOne({ _id })

  return result
}

export const database = { getItemById }
