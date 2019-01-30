import axios from 'axios';

export const NEWS_INVALID = 'NEWS_INVALID';
export const NEWS_FETCHING = 'NEWS_FETCHING';
export const NEWS_FETCHED = 'NEWS_FETCHED';
export const NEWS_FETCH_FAILED = 'NEWS_FETCH_FAILED';

function fetchNews() {
  return (dispatch) => {
    dispatch({ type: NEWS_FETCHING });
    return axios.get(`${process.env.UFCBROWSER_URL}/api/news/latest`)
      .then(({ data }) => dispatch({ type: NEWS_FETCHED, result: data }))
      .catch(error => {
        dispatch({ type: NEWS_FETCH_FAILED, error })
      });
  };
}

export function fetchNewsIfNeeded() {
  return (dispatch) => {
    return dispatch(fetchNews());
  };
}
