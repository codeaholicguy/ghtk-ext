import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles'

import LogoImage from '../../core/assets/images/logo.png'

const theme = createMuiTheme()

const Wrapper = styled.div`
  padding: 10px;
`
const Logo = styled.img`
  height: 50px;
`

const App = ({children}) => (
  <MuiThemeProvider theme={theme}>
    <Wrapper>
      <Logo src={LogoImage} alt="Giao hàng tiết kiệm" />
      <div>{children}</div>
    </Wrapper>
  </MuiThemeProvider>
)

App.propTypes = {
  children: PropTypes.node
}

App.defaultProps = {
  children: null
}

export default App
