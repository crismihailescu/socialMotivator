const groupsReducer = (state = {}, action) => {
    switch (action.type) {
        case 'CHOOSE_GROUP':
            state = action.group;
            return state;
        default:
            return state;
    }
}

export default groupsReducer;