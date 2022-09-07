import { KELUAR_KAU, SUDAH_MINGGAT } from "./../Action/LogoutAction";

const keluargknieh = {
  keluar: false,
  loading: false,
};

const LogoutReducer = (state = keluargknieh, action) => {
  switch (action.type) {
    case KELUAR_KAU:
      return {
        ...state,
        keluar: false,
        loading: true,
      };
    case SUDAH_MINGGAT:
      return {
        ...state,
        keluar: true,
        loading: false,
      };
    default:
      return state;
  }
};

export default LogoutReducer;
