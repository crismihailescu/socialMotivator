const activitiesReducer = (state = "[]", action) => {
    switch (action.type) {
        case 'ADD_ACTIVITY_SUCCESS': 
            state = state;
            return state;
        case 'GET_ACTIVITY_SUCCESS':
            state = action.activity;
            return state;
        default: 
            return state;
    }
}

export default activitiesReducer