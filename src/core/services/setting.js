const saveSetting = ({defaultSender, token}) => {
  localStorage.setItem('defaultSender', defaultSender)
  localStorage.setItem('token', token)
}

const getSetting = () => {
  const defaultSender = localStorage.getItem('defaultSender')
  const token = localStorage.getItem('token')

  return {
    defaultSender,
    token
  }
}

const isSettingOk = () => {
  const defaultSender = localStorage.getItem('defaultSender')
  const token = localStorage.getItem('token')

  return defaultSender && token
}

export default {
  getSetting,
  isSettingOk,
  saveSetting
}
