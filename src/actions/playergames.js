import axios from 'axios'
import { GET_MY_GAMES, LOG_API_ERROR, USER_LOADED } from './actionTypes'
import { api, axiosErrorHandler } from '../utils'


export const getMyGames = () => (dispatch, getState) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
        }
    };

    const token = getState().auth.token;

    if (token) {
        config.headers["Authorization"] = `Token ${token}`
    };

    axios.get(api.urlPlayerGames, config)
        .then(res => {
            dispatch({
                type: GET_MY_GAMES,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch({
                type: LOG_API_ERROR,
                payload: axiosErrorHandler(err)
            })
        });
};

