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

