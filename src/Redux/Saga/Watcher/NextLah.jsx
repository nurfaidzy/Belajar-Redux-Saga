import { takeEvery, all } from "redux-saga/effects";
import Halamannya from "../Handler/Halamannya";
import { LANJUT } from "../../Action/Pagenation";

function* oksiap() {
  yield takeEvery(LANJUT, Halamannya);
}

function* NextLah() {
  yield all([oksiap()]);
}

export default NextLah;
