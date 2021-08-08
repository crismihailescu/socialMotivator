import { getPastActivitiesSuccess } from "../actions/pastActivities";
import { put } from "redux-saga/effects";

export function* getPastActivities(action) {
    try {
        let result;
        yield fetch('/pastActivities', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(action.body)
        }).then(res => res.text()).then(res => result = res);
        yield put(getPastActivitiesSuccess(result));
    } catch(err) {
        console.log(err);
    }
}
