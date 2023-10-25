import { all } from 'redux-saga/effects';
import { watchDeleteUserById, watchGetUser, watchGetUserById } from './userSaga';

export default function* rootSaga() {
  yield all([
    watchGetUser(),
    watchGetUserById(),
    watchDeleteUserById
  ]);
}
