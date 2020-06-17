import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import Home from 'src/pages/Home'
import Archive from 'src/pages/Articles'
import ArchiveArticle from 'src/pages/Article'
import AuthResult from 'src/pages/AuthResult'
import SubscribeResult from 'src/pages/SubscribeResult'
import Auth from 'src/pages/Auth'
import Error from 'src/pages/Error'
import Callback from './pages/Auth/callback'
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
        <DefaultLayout path={routePath.LOGIN} component={Auth} />
        <DefaultLayout path={routePath.JOIN} component={Auth} />
        <Route path="/auth/callback" component={Callback} />
        <DefaultLayout path="*" component={Error} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
