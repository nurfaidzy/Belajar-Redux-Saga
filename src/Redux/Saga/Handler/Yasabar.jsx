import axios from "axios";
import { put } from "redux-saga/effects";
import { ANJAY_MASUK, YAH_GAGAL } from "./../../Action/LoginAction";

function* YaSabar(action) {
  // const { payload } = action;
  // try {
  //   yield axios.post("https://reqres.in/api/login", payload).then((res) => {
  //     localStorage.setItem("token", res.data.token);
  //   });
  //   yield put({ type: ANJAY_MASUK });
  // } catch (error) {
  //   yield put({ type: YAH_GAGAL, payload: error });
  // }

  axios.interceptors.request.use(
    (req) => {
      // Add configurations here
      return req;
    },
    (err) => {
      return Promise.reject(err);
    }
  );

  axios.interceptors.response.use(
    (res) => {
      // Add configurations here
      if (res.status === 201) {
        res = "sukses cuy";
      }
      return res;
    },
    (err) => {
      return Promise.reject(err);
    }
  );

  const { payload } = action;
  try {
    yield axios.post("https://reqres.in/api/login", payload).then((res) => {
      localStorage.setItem("token", res.data.token);
    });
    yield put({ type: ANJAY_MASUK });
  } catch (err) {
    yield put({ type: YAH_GAGAL, payload: err });
  }
}

export default YaSabar;
