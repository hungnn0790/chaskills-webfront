// Import the watcher we have just created
import {
  watchGetCharacterises
} from './characterises';

export default function* rootSaga () {
  // We start all the sagas in parallel
  yield [
    watchGetCharacterises()
  ];
}