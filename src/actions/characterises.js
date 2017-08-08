import {
  GET_CHARACTERISES,
  GET_CHARACTERISES_SUCCESS,
  GET_CHARACTERISES_FAILURE
} from '../constants/characterises';

// GET_CHARACTERISES function will be dispatched within ProfileContainer
function getCharacterises () {
  return {
    type: GET_CHARACTERISES
  };
}

/* After fetching form the server this action is intercepted by the reducer and the characterises added to the state */
function getCharacterisesSuccess (characterises) {
  return {
    type: GET_CHARACTERISES_SUCCESS,
    characterises
  };
}

// A failure action is sent in case of server errors
function getCharacterisesFailure () {
  return {
    type: GET_CHARACTERISES_FAILURE
  };
}

// we export all the function in a single export command
export {
  getCharacterises,
  getCharacterisesSuccess,
  getCharacterisesFailure
};