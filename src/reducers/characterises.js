import Immutable from 'immutable';
import {
  GET_CHARACTERISES_SUCCESS,
  GET_CHARACTERISES_FAILURE
} from '../constants/characterises';

// The initial state is just an empty Map
const initialState = Immutable.Map();

// That's a very standard reducer function to return a new state given a dispatched action
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTERISES_SUCCESS: {
      return state.merge({ list: action.characterises });
    }
    case GET_CHARACTERISES_FAILURE: {
      return state.clear();
    }
    default:
      return state;
  }
}