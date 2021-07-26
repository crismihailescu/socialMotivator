const activitiesReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_ACTIVITY': 
            console.log("reached line 4 reducers/activies.js")
            state = action.activity;
            return state;
        default: 
            return state;
    }
}

export default activitiesReducer