import { combineReducers } from 'redux';
import generalInfo from './generalInfo';
import sellingStatus from './sellingStatus';
import displayStatus from './displayStatus';

export default combineReducers({
  generalInfo,
  sellingStatus,
  displayStatus,
});
