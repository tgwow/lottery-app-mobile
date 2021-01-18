import { combineReducers } from 'redux';
import betsReducer from './bets';
import cartReducer from './cart';
import typesReducer from './types';
import filterReducer from './filter';

const reducers = combineReducers({
  betsReducer,
  cartReducer,
  typesReducer,
  filterReducer,
});

export default reducers;
