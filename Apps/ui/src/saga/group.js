import { put } from "redux-saga/effects";
import { getGroupSuccess } from "../actions/groups";
import { openSnackbar } from "../actions/snackbar";

const DUPLICATE = 409;
export function* addGroup(action) {
    try {
        let result;
        yield fetch('http://localhost:3001/groups', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(action.body)
        }).then(response => result = response.status);
        if (result !== DUPLICATE) {
            yield put(openSnackbar('Successfully added group', 'success'));
        } else {
            yield put(openSnackbar('Group Name has been Taken', 'error'));
        }
    } catch (err) {
        yield put(openSnackbar('Unknown Error', 'error'));
    }
}

export function* getGroup() {
    try {
        let groups;
        yield fetch(`http://localhost:3001/groups`).then(res => res.text()).then(res => groups = JSON.parse(res));
        yield put(getGroupSuccess(groups));
    } catch (err) {
    }
}
