const usersReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_USERS_SUCCESS':
            state = action.users;
            return state;
        default:
            return state;
    }
}

export default usersReducer;