import { LOGIN, LOGIN_ERROR, LOGIN_SUCCESS, LOGIN_FAILURE, USERNAME_UPDATED, PASSWORD_UPDATED} from '../constants/actionConstants'
import { stat } from 'fs';

const initialState = {
	loggingIn: false
}

export default function loginReducer (state = initialState, action = {}) {
	switch (action.type) {
		case USERNAME_UPDATED: {
			return {...state, username: action.username}
		}
		case PASSWORD_UPDATED: {
			return {...state, password: action.password}
		}
		case LOGIN: {
			return {...state, loggingIn: true, loggedIn: false, loggingInFailure: false, loggingInError: false}
		}
		case LOGIN_ERROR: {
			return {...state, loggingIn: false, loggedIn: false, loggingInFailure: false, loggingInError: true}
		}
		case LOGIN_SUCCESS: {
			return {...state, loggingIn: false, loggedIn: true, loggingInFailure: false, loggingInError: false}
		}
		case LOGIN_FAILURE: {
			return {...state, loggingIn: false, loggedIn: false, loggingInFailure: true, loggingInError: false}
		}
		default:
			return state
	}
}