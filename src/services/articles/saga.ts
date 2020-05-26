import { call, put, takeEvery } from 'redux-saga/effects'
import { fetchArticles } from './request'
import {
  GET_ARTICLES,
  getArticlesSuccess,
  getArticlesFailure,
  startArticlesLoading,
  endArticlesLoading,
} from './reducer'

export const getArticlesSaga = function*() {
  yield put(startArticlesLoading())
  try {
    const response = yield call(fetchArticles)
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
}
