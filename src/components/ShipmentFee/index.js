import {connect} from 'react-redux'

import ShipmentFee from './ShipmentFee'
import {getShipmentFee, resetShipmentFee} from './actions'

export default connect(
  ({shipmentFee}) => ({shipmentFee}),
  {getShipmentFee, resetShipmentFee}
)(ShipmentFee)
