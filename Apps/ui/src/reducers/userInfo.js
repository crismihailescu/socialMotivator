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
        case 'SIGN_OUT':
            state = {};
            return state;
        case 'ADD_COMPLETION_SUCCESS':
            state = action.user;
            return state;
        case 'UPDATE_SUCCESS':
            console.log("triggered");
            state = action.user;
            return state;
        case 'UPDATE_FAIL':
            console.log("triggered");
            return state;
        // case 'GET_PASSED_SUCCESS':
        //     state = action.user;
        //     return state;
        case 'ENLIST_ACTIVITY_SUCCESS':
            state = action.user;
            return state;
        case 'REMOVE_ACTIVITY_SUCCESS':
            state = action.user;
            return state;
        case 'DELETE_ACTIVITY_SUCCESS':
            state = action.user;
            return state;
        case 'ADD_ACTIVITY_SUCCESS': 
            state = action.activity;
            return state;
        default:
            return state;
    }
}

export default userInfoReducer;
