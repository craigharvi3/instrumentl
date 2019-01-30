import axios from 'axios';

export const PACKS_INVALID = 'PACKS_INVALID';
export const PACKS_FETCHING = 'PACKS_FETCHING';
export const PACKS_FETCHED = 'PACKS_FETCHED';
export const PACKS_FETCH_FAILED = 'PACKS_FETCH_FAILED';

function fetchPacks() {
  return (dispatch) => {
    dispatch({ type: PACKS_FETCHING });
    return axios.get(`/api/packs`, { proxy: { host: '127.0.0.1', port: 8080 } })
      .then(({ data }) => dispatch({ type: PACKS_FETCHED, result: data }))
      .catch(error => dispatch({ type: PACKS_FETCH_FAILED, error }));
  };
}

export function fetchPacksIfNeeded() {
  return (dispatch) => {
    return dispatch(fetchPacks());
  };
}
