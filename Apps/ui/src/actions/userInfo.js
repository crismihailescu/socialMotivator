export const signIn = (username, password) => {
    return {
        type: 'SIGN_IN',
        username,
        password
    }
}

export const signInSuccess = (user) => {
    return {
        type: 'SIGN_IN_SUCCESS',
        user
    }
}

export const signInFailure = () => {
    return {
        type: 'SIGN_IN_FAIL'
    }
}

export const signUp = (body) => {
    return {
        type: 'SIGN_UP',
        body
    }
}

export const signUpSuccess = (user) => {
    return {
        type: 'SIGN_UP_SUCCESS',
        user
    }
}

export const signUpFailure = () => {
    return {
        type: 'SIGN_UP_FAIL'
    }
}

export const signOut = () => {
    return {
        type: 'SIGN_OUT'
    }
}

export const updateUser = (body) => {
    return {
        type: 'UPDATE_USER',
        body
    }
}

export const updateSuccess = (user) => {
    return {
        type: 'SIGN_UP_SUCCESS',
        user
    }
}

export const updateFailure = () => {
    return {
        type: 'SIGN_UP_FAIL'
    }
}

export const enlistActivity = (body) => {
    return {
        type: 'ENLIST_ACTIVITY',
        body,
    }
}

export const enlistActivitySuccess = (user) => {
    return {
        type: 'ENLIST_ACTIVITY_SUCCESS',
        user
    }
}
