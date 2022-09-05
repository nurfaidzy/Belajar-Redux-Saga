import { KU_REGIS, DI_TERIMA, DI_TOLAK } from "../Action/RegisterAction";

const aparegis = {
  regis: false,
  woptunggu: false,
  maaf: false,
};

const RegisterReducer = (state = aparegis, action) => {
  switch (action.type) {
    case KU_REGIS:
      return {
        ...state,
        regis: false,
        woptunggu: true,
        maaf: false,
      };
    case DI_TERIMA:
      return {
        ...state,
        regis: true,
        woptunggu: false,
        maaf: false,
      };
    case DI_TOLAK:
      return {
        ...state,
        regis: false,
        woptunggu: false,
        maaf: action.payload,
      };
    default:
      return state;
  }
};

export default RegisterReducer;
