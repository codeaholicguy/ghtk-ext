import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

const InputWrapper = styled.div`
  margin-top: 10px;
`
const ShipmentFeeWrapper = styled.div`
  margin-top: 20px;
`

export default class ShipmentFee extends Component {
  static propTypes = {
    setting: PropTypes.shape({
      defaultSender: PropTypes.string,
      token: PropTypes.string
    }).isRequired,
    shipmentFee: PropTypes.number,
    getShipmentFee: PropTypes.func.isRequired,
    resetShipmentFee: PropTypes.func.isRequired
  }

  static defaultProps = {
    shipmentFee: null
  }

  constructor(props) {
    super(props)

    const {defaultSender} = props.setting

    this.state = {
      sender: defaultSender,
      receiver: ''
    }
  }

  handleChange = (name) => (event) => {
    this.props.resetShipmentFee()
    this.setState({
      [name]: event.target.value
    })
  }

  handleKeyPress = (name) => (event) => {
    if (event.charCode === 13) {
      switch (name) {
        case 'receiver': {
          const {sender, receiver} = this.state

          this.props.getShipmentFee(sender, receiver)

          break
        }
        default:
          break
      }
    }
  }

  render() {
    const {shipmentFee} = this.props

    return (
      <div>
        <InputWrapper>
          <TextField
            fullWidth
            label="Địa chỉ giao hàng"
            value={this.state.sender}
            placeholder="Ví dụ: Bình thạnh, Hồ Chí Minh"
            onChange={this.handleChange('sender')}
          />
        </InputWrapper>
        <InputWrapper>
          <TextField
            fullWidth
            label="Địa chỉ nhận hàng"
            value={this.state.receiver}
            placeholder="Ví dụ: Bình thạnh, Hồ Chí Minh"
            onChange={this.handleChange('receiver')}
            onKeyPress={this.handleKeyPress('receiver')}
          />
        </InputWrapper>
        <ShipmentFeeWrapper>
          <Typography variant="subheading">
            {`Phí ship tạm tính: ${shipmentFee ? `${shipmentFee} VND` : '-'}`}
          </Typography>
        </ShipmentFeeWrapper>
      </div>
    )
  }
}
