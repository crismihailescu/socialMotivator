export const addActivity = (activity) => {
    return {
        type: 'ADD_ACTIVITY',
        activity
    }
}

export const addActivitySuccess = (activity) => {
    return {
        type: 'ADD_ACTIVITY_SUCCESS',
        activity
    }
}

export const getActivities = (activity) => {
    return {
        type: 'GET_ACTIVITY',
        activity
    }
}



export const getActivitySuccess = (activity) => {
    return {
        type: 'GET_ACTIVITY_SUCCESS',
        activity
    }
}
