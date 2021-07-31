import { put } from "redux-saga/effects";
import { addActivity, addActivitySuccess, getActivitySuccess } from "../actions/activities";

const DUPLICATE = 409;
const INSERTED = 201;
const NOT_FOUND = 404;


export function* add(action) {
    try {
        let result;
        yield fetch('http://localhost:3001/activities/', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(action.body)
        }).then(res => res.text()).then(res => result = res);
        console.log(result);
        yield put(addActivitySuccess(result));
    } catch (err) {
        console.log(err);
    }
}

export function* get(action) {
    try {
        let result;
        yield fetch('http://localhost:3001/activities', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(action.body)
        }).then(res => res.text()).then(res => result = res);
        yield put(getActivitySuccess(result));
    } catch(err) {
        console.log(err);
    }
}