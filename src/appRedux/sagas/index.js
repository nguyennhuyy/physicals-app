import { fork, all } from "redux-saga/effects";

//system

//feature
//login
import authSagas from "./authSagas";

//tourGuide

export default function* rootSaga() {
  yield all([ fork(authSagas)]);
}
