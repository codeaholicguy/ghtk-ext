import {ActionTypes} from '../core/constants'

const initialState = null

export default function(state = initialState, {type, payload}) {
  switch (type) {
    case ActionTypes.GET_SHIPMENT_FEE_SUCCESS:
      return payload
    case ActionTypes.RESET_SHIPMENT_FEE:
      return initialState
    default:
      return state
  }
}
