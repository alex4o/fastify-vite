import React, { Suspense, Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { StaticRouter } from 'react-router'
import routes from '@app/routes.js'

export function createApp (context) {
  return {
    App,
    routes,
    router: import.meta.env.SSR ? StaticRouter : BrowserRouter,
    context,
  }
}

function App (routes, props) {
  return (
    <>
      <Switch>
        {routes.map(({ path, component: RouteComp }) => {
          return (
            <Route key={path} path={path}>
              <RouteComp {...props} />
            </Route>
          )
        })}
      </Switch>
    </>
  )
}