import axios from "axios";
import { JADI_NIEH, ERROR_DATA } from "./../../Action/Home";
import { put } from "redux-saga/effects";

function* Halamannya(action) {
  const { payload } = action;

  try {
    const res = yield axios.get("https://reqres.in/api/users?page=" + payload);
    const kirim = res.data.data;
    yield put({ type: JADI_NIEH, payload: kirim });
  } catch (error) {
    yield put({ type: ERROR_DATA, payload: error });
  }
}

export default Halamannya;
