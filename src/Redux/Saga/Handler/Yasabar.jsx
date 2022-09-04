import axios from "axios";
import { put } from "redux-saga/effects";
import { ANJAY_MASUK, YAH_GAGAL } from "./../../Action/LoginAction";

function* YaSabar(action) {
  const { payload } = action;
  try {
    yield axios.post("https://reqres.in/api/login", payload).then((res) => {
      localStorage.setItem("token", res.data.token);
    });
    yield put({ type: ANJAY_MASUK });
  } catch (error) {
    yield put({ type: YAH_GAGAL });
  }
}

export default YaSabar;
