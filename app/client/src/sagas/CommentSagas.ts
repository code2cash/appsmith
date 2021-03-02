import { ReduxActionTypes } from "constants/ReduxActionConstants";
import { put, takeLatest, take } from "redux-saga/effects";
import { updateLayout, setComments } from "components/ads/Comments/init";

export function* initComments() {
  try {
    yield take([ReduxActionTypes.INITIALIZE_EDITOR_SUCCESS]);
    yield put(updateLayout());
    yield put(setComments());
  } catch (err) {
    console.log(err, "err");
  }
}

export default function* commentSagas() {
  yield takeLatest(ReduxActionTypes.INIT_COMMENTS, initComments);
}
