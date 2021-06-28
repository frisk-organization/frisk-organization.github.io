import React, { useCallback, useContext } from 'react'

import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { Layout, Menu, Row, Typography } from 'antd'

import { Languages } from 'components'
import { LogoIcon } from 'components/Icon'
import LayoutContext from 'providers/layout'

const { Title } = Typography

export const Header = () => {
  const [t] = useTranslation()
  const { key } = useContext(LayoutContext)

  const translate = useCallback(
    (key, options) => t(`links:${key}`, options),
    [t]
  )

  return (
    <Layout.Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <Link to='/'>
        <Row
          align='middle'
          style={{
            float: 'left',
            height: '100%',
            marginRight: 30,
            cursor: 'pointer'
          }}
        >
          <LogoIcon style={{ fontSize: 40, marginRight: 10 }} />

          <Title className='ant-title-primary' level={3} style={{ margin: 0 }}>
            FRISK
          </Title>
        </Row>
      </Link>

      <Row
        align='middle'
        style={{
          float: 'right',
          height: '100%',
          cursor: 'pointer'
        }}
      >
        <Languages />
      </Row>

      <Menu mode='horizontal' selectedKeys={[key]}>
        <Menu.Item key='projects'>
          <Link to='/projects'>{translate('projects')}</Link>
        </Menu.Item>

        <Menu.Item key='faq'>
          <Link to='/faq'>{translate('faq')}</Link>
        </Menu.Item>

        <Menu.Item key='tutorial'>
          <Link to='/tutorial'>{translate('tutorial')}</Link>
        </Menu.Item>
      </Menu>
    </Layout.Header>
  )
}
