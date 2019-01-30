import {
  EVENTS_INVALID,
  EVENTS_FETCHING,
  EVENTS_FETCHED,
  EVENTS_FETCH_FAILED
} from '../actions/events';

const initialState = {
  list: [],
  readyState: EVENTS_INVALID
};

export default function events(state = initialState, action) {
  switch (action.type) {
  case EVENTS_FETCHING:
    return {
      ...state,
      readyState: EVENTS_FETCHING,
    };
  case EVENTS_FETCH_FAILED:
    return {
      ...state,
      readyState: EVENTS_FETCH_FAILED,
      error: action.error,
    };
  case EVENTS_FETCHED:
    return {
      ...state,
      readyState: EVENTS_FETCHED,
      list: action.result,
    };
  default:
    return state;
  }
}
