import {
  NEWS_INVALID,
  NEWS_FETCHING,
  NEWS_FETCHED,
  NEWS_FETCH_FAILED
} from '../actions/news';

const initialState = {
  list: [],
  readyState: NEWS_INVALID
};

export default function news(state = initialState, action) {
  switch (action.type) {
  case NEWS_FETCHING:
    return {
      ...state,
      readyState: NEWS_FETCHING,
    };
  case NEWS_FETCH_FAILED:
    return {
      ...state,
      readyState: NEWS_FETCH_FAILED,
      error: action.error,
    };
  case NEWS_FETCHED:
    return {
      ...state,
      readyState: NEWS_FETCHED,
      list: action.result,
    };
  default:
    return state;
  }
}
