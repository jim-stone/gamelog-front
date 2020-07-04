import { combineReducers } from 'redux';
import auth from './auth';
import playerGames from './playergames'

export const rootReducer = combineReducers(
    {
        auth,
        playerGames,
    },
)

