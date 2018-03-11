import { combineReducers } from 'redux';
import dryer from './dryerReducer';

const dryerAppReducer = combineReducers({
  dryer
});
 
export default dryerAppReducer;
