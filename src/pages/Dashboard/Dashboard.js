import React, { useCallback } from 'react'

import { useTranslation } from 'react-i18next'

import { Col, Row, Typography } from 'antd'

import { LogoIcon } from 'components/Icon'

import { DashboardIssues } from './DashboardIssues'
import { DashboardProjects } from './DashboardProjects'

const { Title } = Typography

export const Dashboard = () => {
  const [t] = useTranslation()

  const translate = useCallback(
    (key, options) => t(`dashboard:${key}`, options),
    [t]
  )

  return (
    <>
      <Row justify='center' style={{ width: '100%' }}>
        <Col xs={24} sm={20} md={16} lg={14} xl={12}>
          <Title
            level={1}
            className='ant-title-primary'
            style={{ textAlign: 'center', fontSize: 68, marginBottom: 20 }}
          >
            <LogoIcon style={{ marginRight: 20 }} />
            {translate('title')}
          </Title>

          <Title level={5} type='secondary' style={{ textAlign: 'center' }}>
            {translate('subtitle')}
          </Title>
        </Col>
      </Row>

      <DashboardProjects style={{ marginTop: 50 }} />

      <DashboardIssues style={{ marginTop: 100 }} />
    </>
  )
}
