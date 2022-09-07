import { put } from "redux-saga/effects";
import { SUDAH_MINGGAT } from "../../Action/LogoutAction";

function* IyaKeluar() {
  localStorage.removeItem("token");
  yield put({ type: SUDAH_MINGGAT });
}

export default IyaKeluar;
