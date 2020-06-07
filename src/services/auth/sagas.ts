import { takeEvery, call, put } from 'redux-saga/effects'
import { sendAuth } from 'src/services/auth/requests'
import {
  SEND_AUTH_CONFIRM,
  sendAuthConfirmSuccess,
  sendAuthConfirmFailure,
  startAuthLoading,
  endAuthLoading,
} from 'src/services/auth/actions'
import { AnyAction } from 'redux'

const sendAuthSaga = function*(action: AnyAction) {
  try {
    yield put(startAuthLoading())

    const { subscriberId } = action.payload
    const response = yield call(sendAuth, subscriberId)
    const { message } = response.data

    yield put(sendAuthConfirmSuccess(message))
  } catch (e) {
    yield put(sendAuthConfirmFailure(e))
  } finally {
    yield put(endAuthLoading())
  }
}

export function* rootAuthSaga() {
  yield takeEvery(SEND_AUTH_CONFIRM, sendAuthSaga)
}
