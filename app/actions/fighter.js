import axios from 'axios';

export const FIGHTER_INVALID = 'FIGHTER_INVALID';
export const FIGHTER_FETCHING = 'FIGHTER_FETCHING';
export const FIGHTER_FETCHED = 'FIGHTER_FETCHED';
export const FIGHTER_FETCH_FAILED = 'FIGHTER_FETCH_FAILED';

function fetchFighter(fighterId) {
  return (dispatch) => {
    dispatch({ type: FIGHTER_FETCHING });
    return axios.get(`${process.env.UFCBROWSER_URL}/api/fighters/${fighterId}`)
      .then(({ data }) => dispatch({ type: FIGHTER_FETCHED, result: data }))
      .catch(error => {
        dispatch({ type: FIGHTER_FETCH_FAILED, error })
      });
  };
}

export function fetchFighterIfNeeded(fighterId) {
  return (dispatch) => {
    return dispatch(fetchFighter(fighterId));
  };
}
