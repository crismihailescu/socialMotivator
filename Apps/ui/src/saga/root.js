import { all, takeEvery } from "redux-saga/effects";
import { add, get } from "./activities";
import { signIn, signUp, updateUser } from "./userInfo";

export function* rootSaga() {
    yield all([
        takeEvery("SIGN_IN", signIn),
        takeEvery("SIGN_UP", signUp),
        takeEvery("UPDATE_USER", updateUser),
        takeEvery("ADD_ACTIVITY", add),
        takeEvery("GET_ACTIVITY", get)
    ]);
}
