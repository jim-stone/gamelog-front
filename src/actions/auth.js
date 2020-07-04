import axios from 'axios';
import { api } from '../utils';
import {
    USER_LOADING, USER_LOADED, AUTH_ERROR,
    LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS
} from './actionTypes';
import auth from '../reducers/auth';


// check token & load user
export const loadUser = () => {
    return (dispatch, getState) => {
        dispatch({ type: "USER_LOADING" });

        const token = getState().auth.token;

        const config = {
            headers: {
                "Content-Type": "application/json",
            }
        };

        if (token) {
            config.headers["Authorization"] = `Token ${token}`
        };

        axios.get(api.urlUser, config)
            .then(res => {
                console.log('loadUser fired', res.data)
                dispatch({
                    type: USER_LOADED,
                    payload: res.data
                })
            }).catch(err => {
                dispatch({
                    type: AUTH_ERROR,
                    payload: err
                });
            })
    };
};


export const login = (loginData) => {
    return (dispatch) => {

        const config = {
            headers: {
                "Content-Type": "application/json",
            }
        };

        axios.post(api.urlLogin, loginData, config)
            .then(res => {
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: res.data
                })
            }).catch(err => {
                dispatch({
                    type: LOGIN_FAIL,
                    payload: err
                })

            })

        loadUser();
    };
};

export const logout = () => {
    return (dispatch, getState) => {

        const config = {
            headers: {
                "Content-Type": "application/json",
            }
        };

        const token = getState().auth.token;

        if (token) {
            config.headers["Authorization"] = `Token ${token}`
        };

        axios.post(api.urlLogout, null, config)
            .then(res => {
                dispatch({
                    type: LOGOUT_SUCCESS,
                })
            }).catch(err => {
                console.log(config);
                console.log(err);
                dispatch({
                    type: LOGOUT_SUCCESS,
                    payload: err
                })
            })
    };
}