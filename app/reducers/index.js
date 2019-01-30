import { combineReducers } from 'redux';
import events from './events';
import fighter from './fighter';
import news from './news';

export default combineReducers({
  events,
  fighter,
  news
});
