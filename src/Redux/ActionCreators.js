import * as ActionTypes from "./ActionTypes";
import { EVENTS } from "../Shared/events";
export const fetchEvents = () => dispatch => {
  dispatch(eventsLoading(true));
  setTimeout(() => {
    dispatch(updateEvents(EVENTS));
  }, 2000);
};

export const eventsLoading = () => ({
  type: ActionTypes.EVENTS_LOADING
});
export const updateEvents = events => ({
  type: ActionTypes.UPDATE_EVENTS,
  payload: events
});

export const eventsFailed = errMess => ({
  type: ActionTypes.FAILED_FETCH_EVENTS,
  payload: errMess
});
