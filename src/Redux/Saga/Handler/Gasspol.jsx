import axios from "axios";
import { JADI_NIEH, ERROR_DATA } from "./../../Action/Home";
import { put } from "redux-saga/effects";

function* Gasspol() {
  axios.interceptors.request.use(
    (req) => {
      return req;
    },
    (err) => {
      return Promise.reject(err);
    }
  );

  axios.interceptors.response.use(
    (res) => {
      return res;
    },
    (err) => {
      return Promise.reject(err);
    }
  );

  try {
    const res = yield axios.get("https://reqres.in/api/users?page=1");
    const kirim = res.data;
    yield put({ type: JADI_NIEH, payload: kirim });
  } catch (error) {
    yield put({ type: ERROR_DATA, payload: error });
  }
}

export default Gasspol;
