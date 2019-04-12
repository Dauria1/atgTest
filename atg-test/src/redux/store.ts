import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import reducers from './reducers'

export default function configureStore() {
  const middlewares = [thunk]

  const store = createStore(
    combineReducers(reducers),
    undefined,
    compose(applyMiddleware(...middlewares))
  )

  return { store }
}
