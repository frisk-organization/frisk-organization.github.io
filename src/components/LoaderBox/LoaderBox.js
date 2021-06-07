import React from 'react'
import PropTypes from 'prop-types'

import { Row } from 'antd'

import { Loading } from 'components'

export const LoaderBox = () => (
  <Row justify='center' align='middle' style={{ height: '100vh' }}>
    <Loading />
  </Row>
)

LoaderBox.propTypes = {
  children: PropTypes.node
}
