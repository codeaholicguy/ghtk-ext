import {connect} from 'react-redux'

import Setup from './Setup'
import {saveSetting} from './actions'

export default connect(
  ({setting}) => ({setting}),
  {saveSetting}
)(Setup)
