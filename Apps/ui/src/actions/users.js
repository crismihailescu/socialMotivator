export const getUsers = () => {
    return {
        type: 'GET_USERS'
    }
}

export const getUsersSuccess = (users) => {
    return {
        type: 'GET_USERS_SUCCESS',
        users
    }
}

export const addCompletion = (user) => {
    return {
        type: 'ADD_COMPLETION',
        user
    }
}

export const addCompletionSuccess = (user) => {
    return {
        type: 'ADD_COMPLETION_SUCCESS',
        user
    }
}

