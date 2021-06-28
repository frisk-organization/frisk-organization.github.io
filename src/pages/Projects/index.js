import React, { lazy, memo, Suspense } from 'react'

import { Route, Switch } from 'react-router-dom'

import { LoaderBox } from 'components'

const ProjectsList = lazy(() => import('./List'))
const ProjectsDetails = lazy(() => import('./Details'))

const Error404 = lazy(() => import('pages/Error404'))

const Projects = memo(() => (
  <Suspense fallback={<LoaderBox style={{ height: '100%' }} />}>
    <Switch>
      <Route exact path='/projects' component={ProjectsList} />

      <Route exact path='/projects/:id' component={ProjectsDetails} />

      <Route component={Error404} />
    </Switch>
  </Suspense>
))

Projects.displayName = 'Projects'

export default Projects
