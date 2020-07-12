import axios from 'axios'
import {
    GET_MY_GAMES, LOG_API_ERROR,
    ADD_TO_MY_GAMES
} from './actionTypes'
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

export const addToMyGames = (newGameData) => (dispatch, getState) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        }
    };

    const token = getState().auth.token;

    if (token) {
        config.headers["Authorization"] = `Token ${token}`
    };



    axios.post(api.urlPostMyGames, newGameData, config)
        .then(res => {
            dispatch({
                type: ADD_TO_MY_GAMES,
                payload: res.data
            });
            console.log("post fired: ", newGameData)
        }).catch(err => {
            dispatch({
                type: LOG_API_ERROR,
                payload: axiosErrorHandler(err)
            });
            console.log(err.request);
            console.log("post fired: ", newGameData, token);
        })
}