import { all, takeEvery } from "redux-saga/effects";
import { addGroup, getGroup } from "./group";
import { getUsers, signIn, signUp, updateUser } from "./user";

export function* rootSaga() {
    yield all([
        takeEvery("SIGN_IN", signIn),
        takeEvery("SIGN_UP", signUp),
        takeEvery("UPDATE_USER", updateUser),
        takeEvery("GET_USERS", getUsers),
        takeEvery("ADD_GROUP", addGroup),
        takeEvery("GET_GROUP", getGroup),
    ]);
}
