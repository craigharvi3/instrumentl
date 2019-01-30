/* eslint-disable global-require */
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware
)(createStore);

// eslint-disable-next-line no-undef
const initReduxDevTool = (typeof window === 'object' && typeof window.devToolsExtension !== 'undefined') ? window.devToolsExtension() : f => f;

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(
    rootReducer,
    initialState,
    initReduxDevTool
  );

  return store;
}
