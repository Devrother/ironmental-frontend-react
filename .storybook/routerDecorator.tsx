import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'

export default story => (
  <BrowserRouter>
    <Switch>{story()}</Switch>
  </BrowserRouter>
)
