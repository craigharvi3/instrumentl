import {
  PACKS_INVALID,
  PACKS_FETCHING,
  PACKS_FETCHED,
  PACKS_FETCH_FAILED
} from '../actions/packs';

const initialState = {
  list: [],
  readyState: PACKS_INVALID
};

export default function packs(state = initialState, action) {
  switch (action.type) {
    case PACKS_FETCHING:
      return {
        ...state,
        readyState: PACKS_FETCHING,
      };
    case PACKS_FETCH_FAILED:
      return {
        ...state,
        readyState: PACKS_FETCH_FAILED,
        error: action.error,
      };
    case PACKS_FETCHED:
      return {
        ...state,
        readyState: PACKS_FETCHED,
        list: action.result,
      };
    default:
      return state;
  }
}
