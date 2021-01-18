import { put } from 'redux-saga/effects';
import { Creators as betsCreators } from '../ducks/bets';
import api from '../../services/api';

export function* fetchBetsSaga() {
  yield put(betsCreators.onLoading());
  try {
    const response = yield api.get('/bets', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(JSON.stringify(response.data, null, 2));
    yield put(betsCreators.onFetchSuccess(response.data));
    alert('Your bets have been fetched saved!');
  } catch (e) {
    console.log('[fetchBets[get-ERROR]]', e.response.data);
    yield put(betsCreators.onError(e));
  }
}
