const activitiesReducer = (state = "[]", action) => {
    switch (action.type) {
        case 'GET_ACTIVITY_SUCCESS':
            state = action.activity;
            return state;
        default: 
            return state;
    }
}

export default activitiesReducer