import {ActionTypes} from '../../core/constants'
import ghtkService from '../../core/services/ghtk'

export const getShipmentFee = (sender, receiver) => async (dispatch) => {
  const [pickDistrict, pickProvince] = sender
    .split(',')
    .map((str) => str.trim())
  const [district, province] = receiver.split(',').map((str) => str.trim())
  const shipmentFee = await ghtkService.getShipmentFee({
    pickDistrict,
    pickProvince,
    district,
    province
  })

  dispatch({
    type: ActionTypes.GET_SHIPMENT_FEE_SUCCESS,
    payload: shipmentFee
  })
}

export const resetShipmentFee = () => ({
  type: ActionTypes.RESET_SHIPMENT_FEE
})

export default {
  getShipmentFee
}
