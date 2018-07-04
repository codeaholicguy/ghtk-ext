import axios from 'axios'

import settingService from './setting'

const GHTK_API_URL = 'https://services.giaohangtietkiem.vn'
const GET_SHIPMENT_FEE = '/services/shipment/fee'

axios.defaults.baseURL = GHTK_API_URL
axios.defaults.headers.common.Token = settingService.getSetting().token

const getShipmentFee = async ({
  pickProvince,
  pickDistrict,
  province,
  district
}) => {
  const {data} = await axios({
    url: GET_SHIPMENT_FEE,
    method: 'get',
    params: {
      pick_province: pickProvince,
      pick_district: pickDistrict,
      province,
      district
    }
  })

  return data.fee.fee
}

export default {
  getShipmentFee
}
