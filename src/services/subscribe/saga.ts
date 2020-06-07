import { call, put, takeEvery } from 'redux-saga/effects'
import { AnyAction } from 'redux'
import { sendEmailSubscribe } from 'src/services/subscribe/request'

import {
  SEND_EMAIL_SUBSCRIBE,
  sendEmailSubscribeSuccess,
  sendEmailSubscribeFailure,
  startSubscribeLoading,
  endSubscribeLoading,
} from 'src/services/subscribe/actions'

// TODO: 사가 함수에 액션 파라미터를 넘길 때 타입이 먹히지 않는 이슈 아직 유효 한 지 확인하기
// https://github.com/redux-saga/redux-saga/issues/1188
const sendEmailSaga = function*(action: AnyAction) {
  yield put(startSubscribeLoading())
  try {
    const response = yield call(sendEmailSubscribe, action.payload.email)
    const { isSubscribeCertified, message } = response.data

    yield put(sendEmailSubscribeSuccess({ isSubscribeCertified, message }))
  } catch (e) {
    yield put(sendEmailSubscribeFailure(e))
  } finally {
    yield put(endSubscribeLoading())
  }
}

export function* rootEmailSaga() {
  yield takeEvery(SEND_EMAIL_SUBSCRIBE, sendEmailSaga)
}
