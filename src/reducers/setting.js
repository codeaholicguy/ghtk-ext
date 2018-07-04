import {ActionTypes} from '../core/constants'

const initialState = {
  defaultSender: '',
  token: ''
}

export default function(state = initialState, {type, payload}) {
  switch (type) {
    case ActionTypes.SAVE_SETTING:
    case ActionTypes.INIT_APP_SUCCESS:
      return {...state, ...payload}
    case ActionTypes.INIT_APP_FAILED:
      return initialState
    default:
      return state
  }
}
