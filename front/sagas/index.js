import { all, fork } from 'redux-saga/effects';
import axios from 'axios';

import userSaga from './user';

axios.defaults.baseURL = 'http://localhost:3065';
axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([ // 동시에 실행
    fork(userSaga), // fork나 call로 generator함수를 실행해 줌
  ]);
}