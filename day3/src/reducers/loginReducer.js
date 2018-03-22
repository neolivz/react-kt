import { LOGIN, LOGIN_ERROR, LOGIN_SUCCESS, LOGIN_FAILURE} from '../constants/actionConstants'
import { stat } from 'fs';

const initialState = {
	loggingIn: false
}

export default function loginReducer (state = initialState, action = {}) {
	switch (action.type) {
		case LOGIN: {
			return {loggingIn: true, loggedIn: false, loggingInFailure: false, loggingInError: false, user: action.user}
		}
		case LOGIN_ERROR: {
			return {loggingIn: false, loggedIn: false, loggingInFailure: false, loggingInError: true}
		}
		case LOGIN_SUCCESS: {
			return {loggingIn: false, loggedIn: true, loggingInFailure: false, loggingInError: false, user: action.user}
		}
		case LOGIN_FAILURE: {
			return {loggingIn: false, loggedIn: false, loggingInFailure: true, loggingInError: false}
		}
		default:
			return state
	}
}