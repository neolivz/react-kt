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
        <LoginElement> <AppInput name='username' id='username' onChange={(e) => props.onUsernameChange(e.target.value)}/></LoginElement>
        <LoginElement> <AppLabel for='password'>Password</AppLabel></LoginElement>
        <LoginElement> <AppInput name='password' id='password' type='password' onChange={(e) => props.onPasswordChange(e.target.value)}/></LoginElement>
        <LoginElement> <AppButton onClick={props.login}>Login</AppButton></LoginElement>
      </AppBody>
    </LoginRoot>
  )
}

export default Login