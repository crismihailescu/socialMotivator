import { all, takeEvery } from "redux-saga/effects";
import { signIn, signUp } from "./userInfo";

export function* rootSaga() {
    yield all([
        takeEvery("SIGN_IN", signIn),
        takeEvery("SIGN_UP", signUp)
    ]);
}
