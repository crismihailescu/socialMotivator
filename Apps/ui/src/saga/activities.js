import { put } from "redux-saga/effects";
import { addActivity } from "../actions/activities";

const DUPLICATE = 409;
const INSERTED = 201;
const NOT_FOUND = 404;


export function* add(action) {
    console.log("reached line 10 ./saga/activities")
    try {
        let result;
        yield fetch('http://localhost:3001/activities/', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(action.body)
        }).then(res => res.text()).then(res => result = res);
        yield put(addActivity(result));
    } catch (err) {
        console.log(err);
    }
}