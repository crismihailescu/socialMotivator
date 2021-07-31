import { all, takeEvery } from "redux-saga/effects";

import { addGroup, getGroup } from "./group";
import { getUsers, signIn, signUp, updateUser } from "./user";
import { add, get } from "./activities";
import { getGroupsPlease } from "./groups";



export function* rootSaga() {
    yield all([
        takeEvery("SIGN_IN", signIn),
        takeEvery("SIGN_UP", signUp),
        takeEvery("UPDATE_USER", updateUser),
        takeEvery("GET_USERS", getUsers),
        takeEvery("ADD_GROUP", addGroup),
        takeEvery("GET_GROUP", getGroup),
        takeEvery("ADD_ACTIVITY", add),
        takeEvery("GET_ACTIVITY", get),
        takeEvery("GET_GROUPS", getGroupsPlease),

    ]);
}
