import {
  FIGHTER_INVALID,
  FIGHTER_FETCHING,
  FIGHTER_FETCHED,
  FIGHTER_FETCH_FAILED
} from '../actions/fighter';

const initialState = {
  fighter: null,
  readyState: FIGHTER_INVALID
};

export default function fighter(state = initialState, action) {
  switch (action.type) {
  case FIGHTER_FETCHING:
    return {
      ...state,
      readyState: FIGHTER_FETCHING,
    };
  case FIGHTER_FETCH_FAILED:
    return {
      ...state,
      readyState: FIGHTER_FETCH_FAILED,
      error: action.error,
    };
  case FIGHTER_FETCHED:
    return {
      ...state,
      readyState: FIGHTER_FETCHED,
      fighter: action.result,
    };
  default:
    return state;
  }
}
