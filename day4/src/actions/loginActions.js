import { LOGIN, LOGIN_ERROR, LOGIN_SUCCESS, LOGIN_FAILURE} from '../constants/actionConstants'

export const login = (user) => ({
	type: LOGIN,
	user
})