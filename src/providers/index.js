import React from 'react'

import PropTypes from 'prop-types'
import { I18nextProvider } from 'react-i18next'
import { BrowserRouter } from 'react-router-dom'

import i18n from './i18n'
import { LayoutProvider } from './layout'
import { ReactQueryProvider } from './reactQuery'

const Providers = ({ children }) => (
  <LayoutProvider>
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </I18nextProvider>
    </BrowserRouter>
  </LayoutProvider>
)

export default Providers

Providers.propTypes = {
  children: PropTypes.node
}
