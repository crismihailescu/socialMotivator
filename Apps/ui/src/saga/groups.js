import { put } from "redux-saga/effects";
import { getGroups, chooseGroup, getGroupSuccess } from "../actions/groups";

const DUPLICATE = 409;
const INSERTED = 201;
const NOT_FOUND = 404;


export function* getGroupsPlease(action) {
    try {
        let result;
        yield fetch(`/groups/${action.username}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(action.body)
        }).then(res => res.text()).then(res => result = res);
        yield put(getGroupSuccess(result));
    } catch (err) {
        console.log(err);
    }
}

