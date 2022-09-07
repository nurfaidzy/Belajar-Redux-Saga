import { takeEvery, all } from "redux-saga/effects";
import Halamannya from "../Handler/Halamannya";
import { SEBELUM } from "../../Action/Pagenation";

function* okbos() {
  yield takeEvery(SEBELUM, Halamannya);
}

function* Backcuy() {
  yield all([okbos()]);
}

export default Backcuy;
