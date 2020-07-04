import {
    USER_LOADED, USER_LOADING, AUTH_ERROR,
    LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS
} from '../actions/actionTypes'



const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null,
    errors: {}
}

export default function auth(state = initialState, action) {

    switch (action.type) {
        case USER_LOADING:
            return { ...state, isLoading: true }
        case USER_LOADED:
            return {
                ...state, isAuthenticated: true, isLoading: false,
                user: action.payload, errors: {}
            };

        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
            localStorage.removeItem('token');
            return {
                ...state, token: null, user: null,
                isAuthenticated: false, isLoading: false, errors: action.payload
            }

        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.auth_token);
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false, errors: null,
                token: localStorage.getItem('token')
            };

        default:
            return state;
    }

}