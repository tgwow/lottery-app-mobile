import { put } from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Creators as betsCreators } from '../ducks/bets';
import api from '../../services/api';

export function* fetchBetsSaga() {
  yield put(betsCreators.onLoading());
  try {
    const userId = yield AsyncStorage.getItem('@userId');
    const response = yield api.get(`/bets/${userId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    yield put(betsCreators.onFetchSuccess(response.data));
  } catch (e) {
    console.log('[fetchBets[get-ERROR]]', e.response.data);
    yield put(betsCreators.onError(e));
  }
}
