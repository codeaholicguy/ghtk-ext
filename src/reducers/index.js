import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

import shipmentFee from './shipmentFee'
import setting from './setting'

export default combineReducers({
  routing: routerReducer,
  shipmentFee,
  setting
})
