import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import { routeUtils } from 'src/utils'
import DefaultLayout from './layouts/DefaultLayout'
import Home from 'src/pages/Home'
import Archive from 'src/pages/Articles'
import ArchiveArticle from 'src/pages/Article'
import AuthResult from 'src/pages/AuthResult'
import Auth from 'src/pages/Auth'
import Profile from 'src/pages/Profile'
import Error from 'src/pages/Error'
import Callback from './pages/Auth/callback'
import { routePath } from 'src/constants'

function App() {
  return (
    <Router history={routeUtils.history}>
      <Switch>
        <DefaultLayout path={routePath.HOME} component={Home} exact={true} />
        <DefaultLayout
          path={routePath.ARTICLES}
          component={Archive}
          exact={true}
        />
        <DefaultLayout path={routePath.ARTICLE} component={ArchiveArticle} />
        <DefaultLayout path={routePath.AUTH_RESULT} component={AuthResult} />
        <DefaultLayout path={routePath.LOGIN} component={Auth} />
        <DefaultLayout path={routePath.JOIN} component={Auth} />
        <DefaultLayout path={routePath.PROFILE} component={Profile} />
        <Route path={routePath.AUTH_CALLBACK} component={Callback} />
        <DefaultLayout
          path={[routePath.ERROR, '*']}
          component={Error}
          exact={true}
        />
      </Switch>
    </Router>
  )
}

export default App
