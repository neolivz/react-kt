import {Grid, Row, Col} from 'react-styled-flexboxgrid'
import styled from 'styled-components'
import {darkGray, primary, primaryLight, primaryText, secondary, secondaryText} from '../../constants/colorConstants' 
export const LoginRoot = styled(Grid)`
  background-color: ${darkGray};
  width: 40rem;
  min-height: 40rem;
`
export const LoginElement = styled(Col)`
  width: 100%;
  padding: 0.5rem;
`
export const AppHeader = styled(Row)`
  background-color: ${primary};
  color: ${primaryText}
`
export const AppHeaderText = styled(Col)`
  min-height: 2.5rem;
  font-size: 2rem;
  padding-left: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  width: 100%;
  background-color: ${primary};
  color: ${primaryText}
`

export const AppBody = styled(Row)`
  padding-left: 2rem;
  padding-right: 2rem;
  width: 100%;
`

export const AppLabel = styled.label`
  width: 100%;
`

export const AppInput = styled.input`
  width: 100%;
  border: 1px solid ${primaryLight}
`

export const AppButton = styled.button`
  padding-left: 5rem;
  padding-right: 5rem;
  line-height: 1.5rem;
  background-color: ${secondary};
  color: ${secondaryText}
`