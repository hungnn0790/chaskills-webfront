import { combineReducers } from 'redux-immutable';
import characterises from './characterises'; 

// combineReducers merges them all!
export default combineReducers({
  characterises
});