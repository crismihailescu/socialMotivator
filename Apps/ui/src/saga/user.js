import { put } from "redux-saga/effects";
import { openSnackbar } from "../actions/snackbar";
import { signInFailure, signInSuccess, signUpSuccess, updateFailure, updateSuccess } from "../actions/userInfo";
import { getUsersSuccess } from "../actions/users";

const DUPLICATE = 409;
const NOT_FOUND = 404;

export function* getUsers(action) {
    try {
        let user;
        yield fetch(`http://localhost:3001/users`).then(res => res.text()).then(res => user = JSON.parse(res));
        yield put(getUsersSuccess(user));
    } catch (err) {
        yield put(openSnackbar('Unknown error getting users', 'error'));
    }
}

export function* signIn(action) {
    try {
        let user;
        yield fetch(`http://localhost:3001/users/${action.username}/${action.password}`).then(res => res.text()).then(res => user = JSON.parse(res));
        if (!user || user === NOT_FOUND) {
            yield put(signInFailure())
            yield put(openSnackbar('Incorrect Username or Password', 'error'));
        } else {
            yield put(signInSuccess(user));
            action.history.push('/');
        }
    } catch (err) {
        yield put(signInFailure())
        yield put(openSnackbar('Incorrect Username or Password', 'error'));
    }
}

export function* signUp(action) {
    try {
        let result;
        yield fetch('http://localhost:3001/users/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(action.body)
        }).then(res => res.text()).then(res => result = JSON.parse(res));
        yield put(signUpSuccess(result));
        action.history.push('/');
    } catch (err) {
        yield put(openSnackbar('Username or Email has been taken', 'error'));
        yield put({ type: "SIGN_UP_FAIL" });
    }
}

export function* updateUser(action) {
    try {
        let result;
        yield fetch('http://localhost:3001/users/', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(action.body)
        }).then(response => result = response.status);
        if (result === DUPLICATE) {
            yield put(updateFailure());
            yield put(openSnackbar('Username or Email has been taken', 'error'));
        } else {
            yield put(openSnackbar('Successfully Updated', 'success'));
            yield put(updateSuccess(action.body));
        }
    } catch (err) {
        yield put(openSnackbar('Unknown Error', 'error'));
        yield put(updateFailure());
    }
}


export function* enlistActivity(action) {
    console.log(action.body);
    try {
        let result;
        yield fetch('http://localhost:3001/users/enlist', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(action.body)
        }).then(response => result = response.status);
        console.log(result);
    } catch (err) {
        yield put(openSnackbar('Unknown Error', 'error'));
        yield put(updateFailure());
    }
}
