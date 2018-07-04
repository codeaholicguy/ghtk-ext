import {connect} from 'react-redux'

import Main from './Main'
import {initApp} from './actions'

export default connect(
  ({setting}) => ({setting}),
  {initApp}
)(Main)
