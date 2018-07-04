import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Setup from '../Setup'
import ShipmentFee from '../ShipmentFee'

export default class Main extends Component {
  static propTypes = {
    setting: PropTypes.shape({
      defaultSender: PropTypes.string,
      token: PropTypes.string
    }).isRequired,
    initApp: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)

    props.initApp()
  }

  render() {
    const {defaultSender, token} = this.props.setting
    const isSettingOk = defaultSender && token

    return (
      <div>
        {isSettingOk ? <ShipmentFee setting={this.props.setting} /> : <Setup />}
      </div>
    )
  }
}
