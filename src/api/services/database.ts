import * as Realm from 'realm-web'
import {
  APP_ID,
  COLLECTION_NAME,
  DB_NAME, MONGO_CLIENT,
  PUBLIC_API_KEY,
} from 'src/dbConfig'

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

async function getItem(_id: string) {
  const mongodb = await getMongoDB()
  const col = mongodb.db(DB_NAME).collection(COLLECTION_NAME)

  const res = await col.findOne({ _id })

  if (res) {
    return { name: res.name }
  }

  return null
}

export const API = { getItem }
