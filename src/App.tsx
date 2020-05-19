import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import Home from './pages/Home'
import Archive from './pages/Articles'
import ArchiveArticle from './pages/Article'
import Error from './pages/Error'
import { routePath } from './constants'

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
        <DefaultLayout path="*" component={Error} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
