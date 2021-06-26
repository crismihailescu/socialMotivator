const userInfoReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            //call api GET CALL
            state.username = '';
            return state;
        case 'SIGN_UP':
            //call api POST CALL
            state.username = '';
            return state;
        default:
            return state;
    }
}

export default userInfoReducer;