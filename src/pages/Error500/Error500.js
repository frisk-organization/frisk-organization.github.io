import React, { useCallback, useEffect } from 'react'

import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { Button, Result, Typography } from 'antd'
import { RollbackOutlined } from '@ant-design/icons'

import { setPageTitle } from 'utils/control'

const { Text, Paragraph } = Typography

export const Error500 = ({ title, description, goBack, buttonText, extra }) => {
  const [t] = useTranslation()
  const history = useHistory()

  useEffect(() => {
    setPageTitle(t(`links:error500`))
  }, [t])

  const translate = useCallback(
    (key, options) => t(`errors:500:${key}`, options),
    [t]
  )

  const onClickBack = () => {
    if (goBack) goBack()
    else {
      history.goBack()
    }
  }

  return (
    <Result
      status='500'
      title={title || translate('title')}
      extra={
        <Button
          type='primary'
          onClick={onClickBack}
          icon={<RollbackOutlined />}
        >
          {buttonText || translate('back')}
        </Button>
      }
      subTitle={
        <>
          <Text type='secondary'>
            {description || translate('description')}
          </Text>

          <Paragraph type='secondary'>{extra || translate('extra')}</Paragraph>
        </>
      }
    />
  )
}

Error500.propTypes = {
  goBack: PropTypes.func,
  extra: PropTypes.string,
  title: PropTypes.string,
  buttonText: PropTypes.string,
  description: PropTypes.string
}
