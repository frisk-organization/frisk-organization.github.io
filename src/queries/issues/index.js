import axios from 'axios'

import { useQuery } from 'react-query'

import RecentIssuesMock from 'mocks/recent-issues.json'

const URL = process.env.REACT_APP_BASE_URL

export const useQueryRecentsIssues = () =>
  useQuery(['queryRecentIssues'], () =>
    axios
      .get(`${URL}/recent-issues`)
      .then(result => result.data.data)
      .catch(() => RecentIssuesMock)
  )
