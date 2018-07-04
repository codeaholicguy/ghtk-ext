import {createStore, applyMiddleware} from 'redux'
import {routerMiddleware} from 'react-router-redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import rootReducer from './reducers'

export function configureStore({initialState, history}) {
  const router = routerMiddleware(history)
  const middlewares = [thunk, router]

  let createStoreWithMiddleware
  if (process.env.NODE_ENV === 'production') {
    createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
  } else {
    createStoreWithMiddleware = composeWithDevTools(
      applyMiddleware(...middlewares)
    )(createStore)
  }
  const store = createStoreWithMiddleware(rootReducer, initialState)

  return store
}

export default {
  configureStore
}
