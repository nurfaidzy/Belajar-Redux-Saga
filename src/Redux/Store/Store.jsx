import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import LoginReducer from "./../Reducer/LoginReducer";
import LoginSaga from "./../Saga/Watcher/LoginSaga";

import RegisterReducer from "../Reducer/RegisterReducer";
import RegisterSaga from "../Saga/Watcher/RegisterSaga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  LoginReducer,
  RegisterReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(LoginSaga);
sagaMiddleware.run(RegisterSaga);

export default store;
