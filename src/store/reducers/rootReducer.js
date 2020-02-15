import { combineReducers } from 'redux';
import generalInfo from './generalInfo';
import saleInfo from './saleInfo';
import optionInfo from './optionInfo';
import userGeneralInfo from './userGeneralInfo';
import userBusinessInfo from './userBusinessInfo';
import userDetailInfo from './userDetailInfo';
import otherInfo from './otherInfo';

export default combineReducers({
  generalInfo,
  saleInfo,
  optionInfo,
  userGeneralInfo,
  userBusinessInfo,
  userDetailInfo,
  otherInfo,
});
