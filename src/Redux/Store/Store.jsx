import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import LoginReducer from "./../Reducer/LoginReducer";
import LoginSaga from "./../Saga/Watcher/LoginSaga";
import HomeReducer from "../Reducer/HomeReducer";
import LogoutReducer from "../Reducer/LogoutReducer";

import RegisterReducer from "../Reducer/RegisterReducer";
import RegisterSaga from "../Saga/Watcher/RegisterSaga";
import Homesaga from "../Saga/Watcher/Homesaga";
import LogoutSaga from "../Saga/Watcher/LogoutSaga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  LoginReducer,
  RegisterReducer,
  HomeReducer,
  LogoutReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(LoginSaga);
sagaMiddleware.run(RegisterSaga);
sagaMiddleware.run(Homesaga);
sagaMiddleware.run(LogoutSaga);

export default store;
