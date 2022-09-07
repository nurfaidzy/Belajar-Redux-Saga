import { takeEvery, all } from "redux-saga/effects";
import IyaKeluar from "../Handler/IyaKeluar";
import { KELUAR_KAU } from "../../Action/LogoutAction";

function* monggo() {
  yield takeEvery(KELUAR_KAU, IyaKeluar);
}

function* LogoutSaga() {
  yield all([monggo()]);
}
export default LogoutSaga;
