import { AnyAction } from 'redux'
import { call, put, takeEvery } from 'redux-saga/effects'
import { fetchArticleById } from './request'
import {
  GET_ARTICLE,
  getArticleByIdSuccess,
  getArticleByIdFailure,
  startArticleLoading,
  endArticleLoading,
} from './reducer'

// TODO: 사가 함수에 액션 파라미터를 넘길 때 타입이 먹히지 않는 이슈 아직 유효 한 지 확인하기
// https://github.com/redux-saga/redux-saga/issues/1188
const getArticleSaga = function*(action: AnyAction) {
  yield put(startArticleLoading())
  try {
    const { id } = action.payload

    const response = yield call(fetchArticleById, id)
    yield put(getArticleByIdSuccess(response.data))
  } catch (e) {
    yield put(getArticleByIdFailure(e))
  } finally {
    yield put(endArticleLoading())
  }
}

export function* rootArticleSaga() {
  yield takeEvery(GET_ARTICLE, getArticleSaga)
}
