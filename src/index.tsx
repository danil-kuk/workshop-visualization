import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import * as Realm from 'realm-web'
import { App } from 'src/App'

import { store } from './store/store'
import { APP_ID, COLLECTION_NAME, DB_NAME, MONGO_CLIENT } from './dbConfig'

import './theme'

const app: Realm.App =  Realm.App.getApp(APP_ID)

async function loginAnonymous() {
  const credentials = Realm.Credentials.anonymous()
  const user: Realm.User = await app.logIn(credentials)

  return user
}

loginAnonymous().then(user => {
  console.log('Successfully logged in!', user)

  const mongodb = user.mongoClient(MONGO_CLIENT)
  const collection = mongodb.db(DB_NAME).collection(COLLECTION_NAME)

  return collection.findOne({ '_id': '10059872' })
}).then(res => console.log(res))


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<div>Загрузка...</div>}>
          <App />
        </Suspense>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
