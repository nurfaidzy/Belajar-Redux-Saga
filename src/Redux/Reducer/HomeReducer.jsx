import { JADI_NIEH } from "./../Action/Home";

const res = {
  data: [],
  page: 0,
  tpage: 0,
};

const HomeReducer = (state = res, action) => {
  switch (action.type) {
    case JADI_NIEH:
      return {
        ...state,
        data: action.payload.data,
        page: action.payload.page,
        tpage: action.payload.total_pages,
      };
    default:
      return state;
  }
};

export default HomeReducer;
