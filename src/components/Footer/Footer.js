import React, { useCallback } from 'react'

import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { Col, Divider, Layout, Row, Typography } from 'antd'

import { LogoIcon } from 'components/Icon'

export const Footer = () => {
  const [t] = useTranslation()

  const translate = useCallback(
    (key, options) => t(`links:${key}`, options),
    [t]
  )

  return (
    <Layout.Footer style={{ textAlign: 'center' }}>
      <Divider style={{ marginTop: 0 }} />

      <Row gutter={[4, 4]}>
        <Col xs={24} sm={12}>
          <Row align='middle'>
            <Link to='/'>
              <LogoIcon style={{ fontSize: '32px' }} />
            </Link>

            <Typography.Text style={{ marginLeft: 10 }} type='secondary'>
              © 2021 FRISK.
            </Typography.Text>
          </Row>
        </Col>

        <Col xs={24} sm={12}>
          <Row gutter={[16, 16]} justify='end'>
            <Col>
              <Link to='/faq'>{translate('faq')}</Link>
            </Col>

            <Col>
              <Link to='/tutorial'>{translate('tutorial')}</Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Layout.Footer>
  )
}
