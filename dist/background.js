/* eslint-disable */

const token = localStorage.getItem('token')
const targetPage = 'https://services.giaohangtietkiem.vn/*'
const addTokenHeader = (e) => {
  e.requestHeaders.push({name: 'Token', value: token})
  return {requestHeaders: e.requestHeaders}
}

browser.webRequest.onBeforeSendHeaders.addListener(
  addTokenHeader,
  {urls: [targetPage]},
  ['blocking', 'requestHeaders']
)
