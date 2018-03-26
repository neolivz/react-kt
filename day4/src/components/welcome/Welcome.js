import React from 'react'
import {WelcomeRoot, WelcomeElement, AppHeader, AppHeaderText, AppBody, AppButton, AppInput, AppLabel} from './LoginStyle'
const Login = (props) => {
  return (
    <WelcomeRoot>
      <AppHeader>
        <AppHeaderText><AppLabel>Thank you!</AppLabel></AppHeaderText>
      </AppHeader>
      <AppBody>
        <WelcomeElement>Welcome</WelcomeElement>
      </AppBody>
    </WelcomeRoot>
  )
}

export default Login