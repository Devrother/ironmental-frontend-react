import { all, fork } from 'redux-saga/effects'
import { rootArticlesSaga } from 'src/services/articles/saga'
import { rootArticleSaga } from 'src/services/article/saga'
import { rootEmailSaga } from 'src/services/subscribe/saga'

export const rootSaga = function*() {
  yield all([
    fork(rootArticlesSaga),
    fork(rootArticleSaga),
    fork(rootEmailSaga),
  ])
}
