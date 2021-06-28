import axios from 'axios'

import { useQuery } from 'react-query'

const URL = process.env.REACT_APP_BASE_URL

export const useQueryTopProjects = () =>
  useQuery(['queryTopProjects'], () =>
    axios.get(`${URL}/top-projects`).then(result => result.data)
  )

export const useQueryProjects = () =>
  useQuery(['queryProjects'], () =>
    axios.get(`${URL}/projects`).then(result => result.data)
  )

export const useQueryProject = ({ id }) =>
  useQuery(['queryProject'], () =>
    axios.get(`${URL}/projects/${id}`).then(result => result.data)
  )
