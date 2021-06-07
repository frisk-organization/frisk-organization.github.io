import React, {
  lazy,
  memo,
  Suspense,
  useEffect,
  useContext,
  useCallback
} from 'react'

import { useTranslation } from 'react-i18next'
import { Route, Switch } from 'react-router-dom'

import { LoaderBox } from 'components'
import LayoutContext from 'providers/layout'
import { setPageTitle } from 'utils/control'

const FAQ = lazy(() => import('./FAQ'))
const Error404 = lazy(() => import('./Error404'))
const Tutorial = lazy(() => import('./Tutorial'))
const Dashboard = lazy(() => import('./Dashboard'))

const Routes = memo(() => {
  const [t] = useTranslation()
  const { key, dispatch } = useContext(LayoutContext)

  const translate = useCallback((key, options) => t(key, options), [t])

  useEffect(() => {
    if (key) {
      setPageTitle(translate(`links:${key}`))
    }
  }, [key, translate])

  const setKey = useCallback(
    (payload = '') => {
      dispatch({ type: 'changeKey', payload })
    },
    [dispatch]
  )

  const renderPage = useCallback(
    (key, props, Component) => {
      setKey(key)

      return <Component {...props} />
    },
    [setKey]
  )

  return (
    <Suspense fallback={<LoaderBox />}>
      <Switch>
        <Route
          exact
          path='/'
          render={props => renderPage('dashboard', props, Dashboard)}
        />

        <Route
          exact
          path='/tutorial'
          render={props => renderPage('tutorial', props, Tutorial)}
        />

        <Route
          exact
          path='/faq'
          render={props => renderPage('faq', props, FAQ)}
        />

        <Route render={props => renderPage('error404', props, Error404)} />
      </Switch>
    </Suspense>
  )
})

Routes.displayName = 'Routes'

export default Routes
