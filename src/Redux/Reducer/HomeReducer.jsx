import { JADI_NIEH } from "./../Action/Home";

const HomeReducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case JADI_NIEH:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default HomeReducer;
