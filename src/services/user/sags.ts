import { SEND_LOGIN, SEND_JOIN, actions } from './actions'
import { sendJoin, sendLogin } from './request'
import { AnyAction } from 'redux'
import { put, call, takeEvery } from 'redux-saga/effects'

const sendLoginSaga = function*(action: AnyAction) {
  yield put(actions.startSetUserLoading())
  try {
    const { code } = action.payload
    const response = yield call(sendLogin, code)

    const message = response.data.message
    const user = response.data.data

    yield put(actions.setUser(user))
  } catch (e) {
    yield put(actions.setUserFailure(e))
  } finally {
    yield put(actions.endSetUserLoading())
  }
}

const sendJoinSaga = function*(action: AnyAction) {
  yield put(actions.startSetUserLoading())
  try {
    const { code } = action.payload
    const response = yield call(sendJoin, code)

    const message = response.data.message
    const user = response.data.data

    alert('가입성공!!')
    /* console.log('가입 완료!!', response.data) */
    yield put(actions.setUser(user))
  } catch (e) {
    // console.log('가입 실패 ㅠㅠ')
    yield put(actions.setUserFailure(e))
  } finally {
    yield put(actions.endSetUserLoading())
  }
}

export function* rootUserSaga() {
  yield takeEvery(SEND_LOGIN, sendLoginSaga)
  yield takeEvery(SEND_JOIN, sendJoinSaga)
}
