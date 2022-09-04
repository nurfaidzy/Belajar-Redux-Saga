import { takeEvery, all } from "redux-saga/effects";
import YaSabar from "../Handler/Yasabar";
import { COBA_LOGIN } from "./../../Action/LoginAction";

function* tunggudulu() {
  yield takeEvery(COBA_LOGIN, YaSabar);
}

function* LoginSaga() {
  yield all([tunggudulu()]);
}
export default LoginSaga;
