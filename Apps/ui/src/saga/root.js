import { all, takeEvery } from "redux-saga/effects";

import { addGroup, getGroup } from "./group";
import { deleteActivity, enlistActivity, getUsers, removeActivity, signIn, signUp, updateUser, userCompletion } from "./user";
import { add, get } from "./activities";
import { getPastActivities } from "./pastActivities";
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
        takeEvery("GET_PAST_ACTIVITY", getPastActivities),
        takeEvery("GET_GROUPS", getGroupsPlease),
        takeEvery("ENLIST_ACTIVITY", enlistActivity),
        // takeEvery("GET_PASSED", getPassedActs),
        takeEvery("REMOVE_ACTIVITY", removeActivity),
        takeEvery("DELETE_ACTIVITY", deleteActivity),
        takeEvery("ADD_COMPLETION", userCompletion)
    ]);
}
