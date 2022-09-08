import axios from "axios";
import { put } from "redux-saga/effects";
import { ANJAY_MASUK } from "../../Action/LoginAction";
import { DI_TERIMA, DI_TOLAK } from "./../../Action/RegisterAction";

function* OkTunggu(action) {
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

  const { payload } = action;
  try {
    yield axios.post("https://reqres.in/api/register", payload).then((res) => {
      localStorage.setItem("token", res.data.token);
    });
    yield put({ type: DI_TERIMA });
    yield put({ type: ANJAY_MASUK });
  } catch (error) {
    yield put({ type: DI_TOLAK, payload: error });
  }
}
export default OkTunggu;
