import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const InputWrapper = styled.div`
  margin-top: 10px;
`
const ActionsWrapper = styled.div`
  margin-top: 10px;
`

export default class Setup extends Component {
  static propTypes = {
    setting: PropTypes.shape({
      defaultSender: PropTypes.string,
      token: PropTypes.string
    }).isRequired,
    saveSetting: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)

    const {defaultSender, token} = props.setting

    this.state = {
      defaultSender,
      token
    }
  }

  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value
    })
  }

  handleClick = () => {
    const {defaultSender, token} = this.state

    this.props.saveSetting({
      defaultSender,
      token
    })
  }

  render() {
    return (
      <div>
        <InputWrapper>
          <TextField
            fullWidth
            label="Địa chỉ giao hàng mặc định"
            value={this.state.defaultSender}
            placeholder="Ví dụ: Bình thạnh, Hồ Chí Minh"
            onChange={this.handleChange('defaultSender')}
          />
        </InputWrapper>
        <InputWrapper>
          <TextField
            fullWidth
            label="API Token Key"
            value={this.state.token}
            placeholder="Xem phần thông tin shop trong web giaohangtietkiem.com"
            onChange={this.handleChange('token')}
          />
        </InputWrapper>
        <ActionsWrapper>
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleClick}>
            Save
          </Button>
        </ActionsWrapper>
      </div>
    )
  }
}
