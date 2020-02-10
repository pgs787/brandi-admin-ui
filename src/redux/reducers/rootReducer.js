import { combineReducers } from 'redux';
import generalInfo from './generalInfo';
import saleInfo from './saleInfo';
import optionInfo from './optionInfo';

export default combineReducers({
  generalInfo,
  saleInfo,
  optionInfo,
});
