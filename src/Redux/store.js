import { legacy_createStore as createStore } from 'redux'
import { combineReducers } from 'redux'
import { deliveryReduser } from './reducer'

const allReducers = combineReducers({
  delivery: deliveryReduser,
})

export const store = createStore(allReducers)
