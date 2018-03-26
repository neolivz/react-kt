import { LOGIN, LOGIN_ERROR, LOGIN_SUCCESS, LOGIN_FAILURE, PASSWORD_UPDATED, USERNAME_UPDATED} from '../constants/actionConstants'

export const login = () => ({
	type: LOGIN
})

export const onUsernameChange = (username) => ({
	type: USERNAME_UPDATED,
	username
})


export const onPasswordChange = (password) => ({
	type: PASSWORD_UPDATED,
	password
})