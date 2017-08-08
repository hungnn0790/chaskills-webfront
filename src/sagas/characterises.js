// Import a saga helper
import {
    takeLatest
} from 'redux-saga';

// Saga effects are usesul to interact with the saga middleware
import {
    put,
    call
} from 'redux-saga/effects';

// As predicted a saga will take care of GET_CHARACTERISES actions
import {
  GET_CHARACTERISES
} from '../constants/characterises';

// either one is yielded once the fetch is done
import { getCharacterisesSuccess, getCharacterisesFailure } from '../actions/characterises';

// We moved the fetch from ProfileContainer
const fetchCharacterises = () => {
  return fetch('http://localhost:8765/api/characterises', { // TODO: Need to config it
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
  .then(response => response.json())
};

// yield call to fetchCharacterises is in a try catch to control the flow even when the promise rejects
function* getCharacterises () {
  try {
    const characterises = yield call(fetchCharacterises);
    yield put(getCharacterisesSuccess(characterises));
  } catch (err) {
    yield put(getCharacterisesFailure());
  }
}

// The watcher saga waits for dispatched GET_CHARACTERISES actions
function* watchGetCharacterises () {
  yield takeLatest(GET_CHARACTERISES, getCharacterises);
}

// Export the watcher to be run in parallel in sagas/index.js
export { 
    watchGetCharacterises
};