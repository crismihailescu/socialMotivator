const allGroupsReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_GROUP_SUCCESS':
            state = action.groups;
            return state;
        default:
            return state;
    }
}

export default allGroupsReducer;