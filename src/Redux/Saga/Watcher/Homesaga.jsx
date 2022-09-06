import { takeEvery, all } from "redux-saga/effects";
import Gasspol from "../Handler/Gasspol";
import { DAPATI_DATA } from "./../../Action/Home";

function* asyiap() {
  yield takeEvery(DAPATI_DATA, Gasspol);
}

function* Homesaga() {
  yield all([asyiap()]);
}

export default Homesaga;
