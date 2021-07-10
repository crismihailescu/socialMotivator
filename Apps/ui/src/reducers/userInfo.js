const userInfoReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SIGN_IN_SUCCESS':
            state = action.user;
            return state;
        case 'SIGN_IN_FAIL':
            return state;
        case 'SIGN_UP_SUCCESS':
            state = action.user;
            return state;
        case 'SIGN_UP_FAIL':
            return state;
        default:
            return state;
    }
}

export default userInfoReducer;