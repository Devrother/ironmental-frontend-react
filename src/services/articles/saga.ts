import { call, put, takeEvery } from 'redux-saga/effects'
import { fetchArticles } from './request'
import {
  GET_ARTICLES,
  getArticlesSuccess,
  getArticlesFailure,
  startArticlesLoading,
  endArticlesLoading,
  GET_MORE_ARTICLES,
} from './actions'
import { AnyAction } from 'redux'

export const getArticlesSaga = function*(action: AnyAction) {
  yield put(startArticlesLoading())
  try {
    const { offset, limit } = action.payload
    const response = yield call(fetchArticles, { offset, limit })

    const { datas, links } = response.data

    yield put(getArticlesSuccess(datas, links.next))
  } catch (e) {
    yield put(getArticlesFailure(e))
  } finally {
    yield put(endArticlesLoading())
  }
}

export function* rootArticlesSaga() {
  yield takeEvery(GET_ARTICLES, getArticlesSaga)
  yield takeEvery(GET_MORE_ARTICLES, getArticlesSaga)
}
