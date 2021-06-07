import React, { memo, lazy, Suspense } from 'react'

import moment from 'moment'

import { AppBar, LoaderBox } from 'components'
import { useLocateMoment } from 'utils/hooks/useLocate'

const Routes = lazy(() => import('./pages'))

const App = memo(() => {
  const [location, language] = useLocateMoment()

  moment.locale(language, location)

  return (
    <Suspense fallback={<LoaderBox />}>
      <AppBar>
        <Routes />
      </AppBar>
    </Suspense>
  )
})

App.displayName = 'App'

export default App
