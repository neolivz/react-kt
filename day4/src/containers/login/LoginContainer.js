import {connect} from 'react-redux'
import {onUsernameChange, onPasswordChange, login} from '../../actions/loginActions'
import Login from '../../components/login/Login'

const mapStateToProps = ({loginDetails}) => {
  return loginDetails
}

const mapDispatchToProps = (dispatch) => ({
  onPasswordChange: (password) =>  dispatch(onPasswordChange(password)),
  onUsernameChange: (username) =>  dispatch(onUsernameChange(username)),
  login: () =>  dispatch(login)
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)