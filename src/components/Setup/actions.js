import {ActionTypes} from '../../core/constants'
import settingService from '../../core/services/setting'

export const saveSetting = ({defaultSender, token}) => {
  settingService.saveSetting({defaultSender, token})

  return {
    type: ActionTypes.SAVE_SETTING,
    payload: {
      defaultSender,
      token
    }
  }
}

export default {
  saveSetting
}
