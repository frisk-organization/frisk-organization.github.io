import React, { useCallback, useMemo } from 'react'

import { useTranslation } from 'react-i18next'

import { DownOutlined } from '@ant-design/icons'
import { Dropdown, Menu, Row, Typography } from 'antd'

import { EnUSIcon, PtBRIcon } from 'components/Icon'

const { Text } = Typography

export const Languages = () => {
  const [t] = useTranslation()

  const translate = useCallback(
    (key, options) => t(`languages:${key}`, options),
    [t]
  )

  const languages = useMemo(
    () => [
      {
        key: 'enUS',
        image: <EnUSIcon />,
        country: translate('enUS:country'),
        language: translate('enUS:language')
      },
      {
        key: 'ptBR',
        image: <PtBRIcon />,
        country: translate('ptBR:country'),
        language: translate('ptBR:language')
      }
    ],
    [translate]
  )

  const currentLanguage = useMemo(() => {
    const lg = localStorage.getItem('i18nextLng')
    const langs = languages.map(e => e.key)

    switch (lg) {
      case 'enUS':
      case 'ptBR':
        return languages[langs.indexOf(lg)]

      default:
        return languages[langs.indexOf('ptBR')]
    }
  }, [languages])

  const changeLanguage = value => {
    localStorage.setItem('i18nextLng', value)
    window.location.reload()
  }

  return (
    <Dropdown
      overlay={
        <Menu>
          {languages.map(e => (
            <Menu.Item key={e.key} onClick={() => changeLanguage(e.key)}>
              <Text strong={e.key === currentLanguage.key}>{e.language}</Text>
            </Menu.Item>
          ))}
        </Menu>
      }
    >
      <Row align='middle'>
        {currentLanguage.image}
        <Text style={{ margin: '0 5px' }}>{currentLanguage.country}</Text>
        <DownOutlined />
      </Row>
    </Dropdown>
  )
}
