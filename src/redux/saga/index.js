import { takeEvery, all } from 'redux-saga/effects';

import { saveBetsSaga } from './cart';
import { Types as cartTypes } from '../ducks/cart';
import { fetchTypesSaga } from './types';
import { Types as typesTypes } from '../ducks/types';
import { fetchBetsSaga } from './bets';
import { Types as betsTypes } from '../ducks/bets';

export function* watchTypes() {
  yield takeEvery(typesTypes.FETCH_TYPES, fetchTypesSaga);
}
export function* watchBets() {
  yield takeEvery(betsTypes.FETCH_BETS, fetchBetsSaga);
}
export function* watchCart() {
  yield takeEvery(cartTypes.SAVE, saveBetsSaga);
}
function* rootSaga() {
  yield all([watchTypes(), watchBets(), watchCart()]);
}

export default rootSaga;
