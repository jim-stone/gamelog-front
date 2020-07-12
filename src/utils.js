
export const axiosErrorHandler = (error) => {
    if (error.response) {
        return [error.response.status,
        error.response.statusText,
        error.response.headers]
    }
    else if (error.request) {
        return [error.request.status,
        error.request.statusText,
        error.request.headers]
    }
    else {
        return [error.message]
    };
};



const localApi = {
    urlLogin: 'http://127.0.0.1:8000/api/auth/tokens/token/login/',
    urlLogout: 'http://127.0.0.1:8000/api/auth/tokens/token/logout/',
    urlUser: 'http://127.0.0.1:8000/api/auth/users/me/',
    urlPlayerGames: 'http://127.0.0.1:8000/api/playergames/',
    urlPostMyGames: 'http://127.0.0.1:8000/api/games/'
}


// const prodApi = {}


export let api = localApi;