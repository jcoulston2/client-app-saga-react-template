import homeViewSaga from '../containers/HomeView/saga';
import { fork, all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([fork(homeViewSaga)]);
}
