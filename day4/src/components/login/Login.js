import React from 'react'
import {LoginRoot,LoginElement, AppHeader, AppHeaderText, AppBody, AppButton, AppInput, AppLabel} from './LoginStyle'
const Login = (props) => {
  return (
    <LoginRoot>
      <AppHeader>
        <AppHeaderText><AppLabel>Please Sign In</AppLabel></AppHeaderText>
      </AppHeader>
      <AppBody>
        <LoginElement> <AppLabel for='username'>User Name</AppLabel></LoginElement>
        <LoginElement> <AppInput name='username' id='username'/></LoginElement>
        <LoginElement> <AppLabel for='password'>Password</AppLabel></LoginElement>
        <LoginElement> <AppInput name='password' id='password' type='text'/></LoginElement>
        <LoginElement> <AppButton>Login</AppButton></LoginElement>
      </AppBody>
    </LoginRoot>
  )
}

export default Login