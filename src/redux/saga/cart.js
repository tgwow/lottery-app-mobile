import { put } from 'redux-saga/effects';
import { Creators as cartCreators } from '../ducks/cart';
import api from '../../services/api';

export function* saveBetsSaga(action) {
  const { alert, bets } = action.payload;
  yield put(cartCreators.onLoading());
  try {
    const response = yield api.post(
      '/bets',
      { bets },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    // id
    // color
    // name
    // price
    // TODO: I need the color value here, just make some adjusts on api to return this data
    yield put(cartCreators.onSuccess(response.data));
    alert('Yeah', 'Your bets have been successfully saved!');
  } catch (e) {
    console.log('[saveBetsSaga[post-ERROR]]', e.response.data);
    yield put(cartCreators.onError(e));
  }
}
