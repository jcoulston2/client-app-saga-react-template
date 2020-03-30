import { actions, actionTypes } from './actions';
import { take, put, all, fork } from 'redux-saga/effects';

/**
 * @Info: This is the weird part - sagas. All they do really is watch for actions, and then fire off
 * a success actions. That's it!!!! Simple
 */
export function* watchMyFirstAction() {
  while (true) {
    const { clickedText } = yield take(actionTypes.FIRST_ACTION);
    yield put(actions.firstActionSuccess(clickedText));
  }
}

/**
 * @Info: The watcher is above, then we fork it here, which will be imported into our root reducer
 * weird syntax but that's basically it - no need to understand too much what's going on here
 */
export default function* homeViewSaga() {
  yield all([fork(watchMyFirstAction)]);
}
