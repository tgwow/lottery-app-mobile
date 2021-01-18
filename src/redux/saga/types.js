import { put } from 'redux-saga/effects';
import { Creators as typesCreators } from '../ducks/types';
import api from '../../services/api';

export function* fetchTypesSaga() {
  yield put(typesCreators.onLoading());
  try {
    const response = yield api.get('/types', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    yield put(typesCreators.onFetchSuccess(response.data));
  } catch (e) {
    console.log('[fetchTypes[get-ERROR]]', e.response.data);
    yield put(typesCreators.onError(e));
  }
}
