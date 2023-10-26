import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_USER, GET_USER_SUCCESS, GET_USER_BY_ID_SUCCESS, GET_USER_BY_ID_FAILURE, GET_USER_BY_ID, DELETE_USER, DELETE_USER_BY_ID_SUCCESS } from '../Actions/action';
import { usersFetch, getUserByIdApi, deleteUserByIdApi } from '../Components/apis';

function* workGetWorkerFetch() {
  try {
    const user = yield call(usersFetch);
    yield put({ type: GET_USER_SUCCESS, user });
  } catch (error) {
    console.error(error);
  }
}

function* getUserById(action) {
  try {
    const userId = yield call(getUserByIdApi, action.Id);
   console.log('call userId in saga:-',userId )
    yield put({ type: GET_USER_BY_ID_SUCCESS, userId });

  } catch (error) {
    yield put({ type: GET_USER_BY_ID_FAILURE, error });
  }
}

function* deleteUserById(action) {
    
      const Id = yield call(deleteUserByIdApi, action.Id);
     console.log('call deleteId in saga:-',Id )
      yield put({ type: DELETE_USER_BY_ID_SUCCESS, Id });
  
    
  }

export function* watchGetUser() {
  yield takeEvery(GET_USER, workGetWorkerFetch);
}

export function* watchGetUserById() {

  yield takeEvery(GET_USER_BY_ID, getUserById);

}

export function* watchDeleteUserById() {

    yield takeEvery(DELETE_USER, deleteUserById);
  
  }