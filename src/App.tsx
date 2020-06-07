import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import Home from 'src/pages/Home'
import Archive from 'src/pages/Articles'
import ArchiveArticle from 'src/pages/Article'
import AuthResult from 'src/pages/AuthResult'
import SubscribeResult from 'src/pages/SubscribeResult'
import Error from 'src/pages/Error'
import { routePath } from 'src/constants'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <DefaultLayout path={routePath.HOME} component={Home} exact={true} />
        <DefaultLayout
          path={routePath.ARTICLES}
          component={Archive}
          exact={true}
        />
        <DefaultLayout path={routePath.ARTICLE} component={ArchiveArticle} />
        <DefaultLayout path={routePath.AUTH_RESULT} component={AuthResult} />
        <DefaultLayout
          path={routePath.SUBSCRIBE_RESULT}
          component={SubscribeResult}
        />
        <DefaultLayout path="*" component={Error} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
