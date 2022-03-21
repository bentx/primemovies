import { INCREMENT, SETMOVIEPAGE, SETROUTEVALUE } from "../action";
const counterReducer = (state = 1, action) => {
  switch (action.type) {
    case INCREMENT:
      return action.payload;

    default:
      return state;
  }
};

const RouteValueReducer = (state = 1, action) => {
  switch (action.type) {
    case SETROUTEVALUE:
      return action.payload;

    default:
      return state;
  }
};
export default { counterReducer, RouteValueReducer };
