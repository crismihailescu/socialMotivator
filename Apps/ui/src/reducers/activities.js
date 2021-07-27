const activitiesReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_ACTIVITY': 
            state = action.activity;
            return state;
        default: 
            return state;
    }
}

export default activitiesReducer