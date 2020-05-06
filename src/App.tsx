import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import Home from './pages/Home'
import Archive from './pages/Archive'
import { routePath } from './constants'

function App() {
  // TODO: history 객체 사용여부 판단하기
  return (
    <BrowserRouter>
      <Switch>
        <DefaultLayout path={routePath.HOME} component={Home} exact={true} />
        <DefaultLayout path={routePath.ARCHIVE} component={Archive} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
