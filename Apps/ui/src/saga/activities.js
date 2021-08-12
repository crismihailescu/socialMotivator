import { put } from "redux-saga/effects";
import { getActivitySuccess, getPastActivitySuccess } from "../actions/activities";

const DUPLICATE = 409;
const INSERTED = 201;
const NOT_FOUND = 404;



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
    } catch (err) {
        console.log(err);
    }
}