import { KELUAR_KAU } from "../Action/LogoutAction";
import { ANJAY_MASUK, COBA_LOGIN, YAH_GAGAL } from "./../Action/LoginAction";

const keberhasilan = {
  apalogin: false,
  tunggucoy: false,
  gagalcuy: false,
};

const LoginReducer = (state = keberhasilan, action) => {
  switch (action.type) {
    case ANJAY_MASUK:
      return {
        ...state,
        apalogin: true,
        tunggucoy: false,
        gagalcuy: false,
      };
    case COBA_LOGIN:
      return {
        ...state,
        apalogin: false,
        tunggucoy: true,
        gagalcuy: false,
      };
    case YAH_GAGAL:
      return {
        ...state,
        apalogin: false,
        tunggucoy: false,
        gagalcuy: action.payload,
      };
    case KELUAR_KAU:
      return {
        ...state,
        apalogin: false,
        tunggucoy: false,
        gagalcuy: false,
      };
    default:
      return state;
  }
};

export default LoginReducer;
