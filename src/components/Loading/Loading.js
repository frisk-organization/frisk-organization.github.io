import React from 'react'

import PropTypes from 'prop-types'

import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

export const Loading = ({ loadingProps, ...props }) => {
  const antIcon = (
    <LoadingOutlined style={{ fontSize: 24 }} spin {...loadingProps} />
  )

  return <Spin indicator={antIcon} {...props} />
}

Loading.propTypes = {
  loadingProps: PropTypes.object
}
