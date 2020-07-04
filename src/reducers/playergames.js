import { GET_MY_GAMES, LOG_API_ERROR } from '../actions/actionTypes';

const initialState = {
    data: '',
    isLoading: true,
    errors: {}
}

export default function (state = initialState, action) {

    switch (action.type) {
        case GET_MY_GAMES:
            return { ...state, data: action.payload, isLoading: false }
        case LOG_API_ERROR:
            return { ...state, errors: action.payload, isLoading: false }
        default:
            return state
    }
}