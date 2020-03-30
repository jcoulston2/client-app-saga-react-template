import { combineReducers } from 'redux';
import { actionTypes } from './actions';
import produce from 'immer';
import homeViewState from '../containers/HomeView/reducer';

export function appState(state = {}, action = {}) {
  return produce(state, draft => {
    switch (action.type) {
      case actionTypes.SET_CLIENT_WIDTH:
        draft.clientWidth = action.clientWidth;
        return draft;

      default:
        return state;
    }
  });
}

const rootReducer = combineReducers({
  homeViewState,
  appState,
});

export default rootReducer;
