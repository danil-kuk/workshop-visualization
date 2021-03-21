import * as Realm from 'realm-web'
import {
  APP_ID,
  COLLECTION_NAME,
  DB_NAME, MONGO_CLIENT,
  PUBLIC_API_KEY,
} from 'src/dbConfig'

const app: Realm.App = Realm.App.getApp(APP_ID)
const mongodb = app.currentUser?.mongoClient(MONGO_CLIENT)

login()

export async function login() {
  const credentials = Realm.Credentials.apiKey(PUBLIC_API_KEY)
  const user = await app.logIn(credentials, false)

  return user
}

export async function getItem() {
  const col = mongodb?.db(DB_NAME).collection(COLLECTION_NAME)

  const res = await col?.findOne({ '_id': '10059872' })

  if (res) {
    return { name: res.name }
  }

  return null
}
