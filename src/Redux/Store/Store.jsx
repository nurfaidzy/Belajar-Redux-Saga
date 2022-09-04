import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import LoginReducer from "./../Reducer/LoginReducer";
import LoginSaga from "./../Saga/Watcher/LoginSaga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  LoginReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(LoginSaga);

export default store;
