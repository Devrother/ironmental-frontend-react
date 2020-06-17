import { call, put, takeEvery } from 'redux-saga/effects'
import { fetchArticles } from './request'
import { GET_ARTICLES, actions, GET_MORE_ARTICLES } from './actions'
import { AnyAction } from 'redux'

export const getArticlesSaga = function*(action: AnyAction) {
  yield put(actions.startArticlesLoading())
  try {
    const { offset, limit } = action.payload
    const response = yield call(fetchArticles, { offset, limit })

    const { datas, links } = response.data

    yield put(actions.getArticlesSuccess(datas, links.next))
  } catch (e) {
    yield put(actions.getArticlesFailure(e))
  } finally {
    yield put(actions.endArticlesLoading())
  }
}

export function* rootArticlesSaga() {
  yield takeEvery(GET_ARTICLES, getArticlesSaga)
  yield takeEvery(GET_MORE_ARTICLES, getArticlesSaga)
}
