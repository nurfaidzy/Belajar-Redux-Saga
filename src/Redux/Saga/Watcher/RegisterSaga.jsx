import { takeEvery, all } from "redux-saga/effects";
import OkTunggu from "../Handler/OkTunggu";
import { KU_REGIS } from "./../../Action/RegisterAction";

function* antrimas() {
  yield takeEvery(KU_REGIS, OkTunggu);
}

function* RegisterSaga() {
  yield all([antrimas()]);
}
export default RegisterSaga;
