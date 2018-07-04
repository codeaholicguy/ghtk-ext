import {ActionTypes} from '../../core/constants'
import settingService from '../../core/services/setting'

export const initApp = () => {
  const isSettingOk = settingService.isSettingOk()

  if (isSettingOk) {
    return {
      type: ActionTypes.INIT_APP_SUCCESS,
      payload: settingService.getSetting()
    }
  }

  return {
    type: ActionTypes.INIT_APP_FAILED
  }
}

export default {
  initApp
}
