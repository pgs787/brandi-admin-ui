import { combineReducers } from 'redux';
import generalInfo from './generalInfo';
import saleInfo from './saleInfo';

export default combineReducers({
  generalInfo,
  saleInfo,
});
