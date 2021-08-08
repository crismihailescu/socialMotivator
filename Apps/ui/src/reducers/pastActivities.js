const pastActivitiesReducer = (state = "[]", action) => {
    switch (action.type) {
        case 'GET_PAST_ACTIVITY_SUCCESS':
            state = action.pastActivities;
            return state;
        default: 
            return state;
    }
}

export default pastActivitiesReducer
