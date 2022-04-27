export const ADD_MOVIES = 'ADD_MOVIES'

export const addMovies = (movie) => {
    return {
        type: 'ADD_MOVIES',
        payload: movie
    }
}

export const removeMovie = (id) => {
    return {
        type: 'REMOVE_MOVIE',
        payload: id
    }
}


