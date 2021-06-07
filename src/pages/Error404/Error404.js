import React, { useCallback } from 'react'

import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { HomeOutlined } from '@ant-design/icons'
import { Button, Result, Typography } from 'antd'

const { Paragraph, Text } = Typography

export const Error404 = () => {
  const [t] = useTranslation()

  const translate = useCallback(
    (key, options) => t(`erros:404:${key}`, options),
    [t]
  )

  return (
    <Result
      status='404'
      title={translate('title')}
      extra={
        <Link to='/'>
          <Button type='primary' icon={<HomeOutlined />}>
            {translate('back')}
          </Button>
        </Link>
      }
      subTitle={
        <>
          <Text type='secondary'>{translate('description')}</Text>
          <Paragraph type='secondary'>{translate('extra')}</Paragraph>
        </>
      }
    />
  )
}
