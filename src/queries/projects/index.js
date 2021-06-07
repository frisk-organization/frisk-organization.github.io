import axios from 'axios'

import { useQuery } from 'react-query'

import ProjectMock from 'mocks/project.json'
import ProjectsMock from 'mocks/projects.json'
import TopProjectsMock from 'mocks/top-projects.json'

const URL = process.env.REACT_APP_BASE_URL

export const useQueryTopProjects = () =>
  useQuery(['queryTopProjects'], () =>
    axios
      .get(`${URL}/top-projects`)
      .then(result => result.data.data)
      .catch(() => TopProjectsMock)
  )

export const useQueryProjects = () =>
  useQuery(['queryProjects'], () =>
    axios
      .get(`${URL}/projects`)
      .then(result => result.data.data)
      .catch(() => ProjectsMock)
  )

export const useQueryProject = ({ id }) =>
  useQuery(['queryProject'], () =>
    axios
      .get(`${URL}/projects/${id}`)
      .then(result => result.data.data)
      .catch(() => ProjectMock)
  )
