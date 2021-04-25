import * as Realm from 'realm-web'
import { ObjectId } from 'bson'

import { DatabaseItemBase } from '../dtos/DatabaseItemBase'

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
function getItemById<T extends DatabaseItemBase>(
  dbName: string,
  collectionName: string,
  _id: string | ObjectId,
): Promise<T | null> {
  const mongodb = getMongoDB()
  const collection = mongodb.db(dbName).collection<T>(collectionName)

  return collection.findOne({ _id })
}

/**
 * Get list of items from selected db and collection.
 * @param dbName Database name.
 * @param collectionName Collection name.
 * @param limit Max items to return.
 */
async function getItems<T extends DatabaseItemBase>(
  dbName: string,
  collectionName: string,
  limit = 10,
): Promise<T[]> {
  const mongodb = getMongoDB()
  const collection = mongodb.db(dbName).collection<T>(collectionName)

  // TODO (Danil K): Add filters support.
  return collection.find({}, { limit })
}

/**
 * Get item from selected db and collection by event id.
 * @param dbName Database name.
 * @param collectionName Collection name.
 * @param event_id Event id.
 */
export function getItemByEventId<T extends DatabaseItemBase>(
  dbName: string,
  collectionName: string,
  event_id: number,
): Promise<T | null> {
  const mongodb = getMongoDB()
  const collection = mongodb.db(dbName).collection<T>(collectionName)

  return collection.findOne({ event_id })
}

export const database = {
  login,
  getItemById,
  getItems,
  getItemByEventId,
}
