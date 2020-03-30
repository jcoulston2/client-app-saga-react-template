import { combineReducers } from 'redux';
import { actionTypes } from './actions';
import produce from 'immer';

/**
 * @Info: Reducers take actions and return state
 * In the saga set up container reducers should only take success actions
 */
export default function homeViewState(state = {}, action = {}) {
  return produce(state, draft => {
    switch (action.type) {
      case actionTypes.FIRST_ACTION_SUCCESS:
        draft.clickedText = action.clickedText;
        return draft;

      default:
        return state;
    }
  });
}
