import React from 'react'
import PropTypes from 'prop-types'

import { BackTop, Layout } from 'antd'

import { Header, Footer } from 'components'

export const AppBar = ({ children }) => (
  <Layout style={{ minHeight: '100%' }}>
    <Header />

    <Layout.Content style={{ padding: '50px', marginTop: 64 }}>
      {children}
      <BackTop />
    </Layout.Content>

    <Footer />
  </Layout>
)

AppBar.propTypes = {
  children: PropTypes.node
}
