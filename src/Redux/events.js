import * as ActionTypes from "./ActionTypes";
export const Events = (
  state = {
    errMess: null,
    events: []
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.UPDATE_EVENTS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        events: action.payload
      };
    case ActionTypes.FAILED_FETCH_EVENTS:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
        events: []
      };

    case ActionTypes.EVENTS_LOADING:
      return { ...state, isLoading: true, errMess: null };
    default:
      return state;
  }
};
