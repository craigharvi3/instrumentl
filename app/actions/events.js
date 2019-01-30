import axios from 'axios';

export const EVENTS_INVALID = 'EVENTS_INVALID';
export const EVENTS_FETCHING = 'EVENTS_FETCHING';
export const EVENTS_FETCHED = 'EVENTS_FETCHED';
export const EVENTS_FETCH_FAILED = 'EVENTS_FETCH_FAILED';

function fetchEvents() {
  return (dispatch) => {
    dispatch({ type: EVENTS_FETCHING });
    return axios.get(`${process.env.UFCBROWSER_URL}/api/events/next`)
      .then(({ data }) => dispatch({ type: EVENTS_FETCHED, result: data }))
      .catch(error => {
        dispatch({ type: EVENTS_FETCH_FAILED, error })
      });
  };
}

export function fetchEventsIfNeeded() {
  return (dispatch) => {
    return dispatch(fetchEvents());
  };
}
