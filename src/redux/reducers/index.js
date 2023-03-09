import { combineReducers } from 'redux';
import userReducer from './user';
import walletReducer from './wallet';

const rootReducer = combineReducers({
  user: userReducer,
  waller: walletReducer,
});

export default rootReducer;
