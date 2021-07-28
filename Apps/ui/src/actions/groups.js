export const chooseGroup = (group) => {
    return {
        type: 'CHOOSE_GROUP',
        group
    }
}

export const getGroups = (group) => {
    return {
        type: "GET_GROUPS",
        group
    }
}

export const getGroupSuccess = (group) => {
    return {
        type: "GET_GROUPS_SUCCESS",
        group
    }
}