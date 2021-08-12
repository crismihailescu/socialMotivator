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

