export const chooseGroup = (group) => {
    return {
        type: 'CHOOSE_GROUP',
        group
    }
}


export const addGroup = (body) => {
    return {
        type: 'ADD_GROUP',
        body
    }
}

export const getGroup = () => {
    return {
        type: 'GET_GROUP'
    }
}

export const getGroupSuccess = (groups) => {
    return {
        type: 'GET_GROUP_SUCCESS',
        groups
    }
}