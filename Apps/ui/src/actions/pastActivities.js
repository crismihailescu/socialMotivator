export const getPastActivities = (pastActivities) => {
    return {
        type: 'GET_PAST_ACTIVITY',
        pastActivities
    }
}

export const getPastActivitiesSuccess = (pastActivities) => {
    return {
        type: 'GET_PAST_ACTIVITY_SUCCESS',
        pastActivities
    }
}
