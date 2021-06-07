import React, { useCallback, useMemo, useState } from 'react'

import { useTranslation } from 'react-i18next'

import {
  Col,
  Row,
  Input,
  Divider,
  Collapse,
  Pagination,
  Typography,
  Space
} from 'antd'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons'

const { Search } = Input
const { Panel } = Collapse
const { Title, Text } = Typography

export const FAQ = () => {
  const [t] = useTranslation()
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')

  const pageSize = 10

  const translate = useCallback((key, options) => t(`faq:${key}`, options), [t])

  const questions = useMemo(
    () =>
      [...new Array(4)].map((_, i) => ({
        answer: translate(`${i}:answer`),
        question: translate(`${i}:question`)
      })),
    [translate]
  )

  const data = useMemo(() => {
    const keys = (search || '')
      .toLowerCase()
      .split(' ')
      .filter(key => !!key)

    if (keys.length === 0) return questions

    return questions.filter(e =>
      keys.some(key => e.question.toLowerCase().includes(key))
    )
  }, [questions, search])

  const getExpandedIcon = ({ isActive }) => {
    if (isActive) {
      return <MinusOutlined className='anticon-primary' />
    }
    return <PlusOutlined className='anticon-primary' />
  }

  return (
    <>
      <Row justify='center' style={{ width: '100%' }}>
        <Col xs={24} sm={20} md={16} lg={14} xl={12}>
          <Title level={2} style={{ textAlign: 'center' }}>
            {translate('title')}
          </Title>

          <Title level={5} type='secondary' style={{ textAlign: 'center' }}>
            {translate('subtitle')}
          </Title>

          <Search
            allowClear
            enterButton
            size='large'
            placeholder={translate('placeholder')}
            onChange={e => setSearch(e.target?.value)}
          />
        </Col>
      </Row>

      <Divider />

      <Space style={{ width: '100%' }} direction='vertical' size={32}>
        <Collapse ghost expandIconPosition='right' expandIcon={getExpandedIcon}>
          {[...data.slice(pageSize * (page - 1), pageSize * page)].map(e => (
            <Panel key={e.question} header={<Text strong>{e.question}</Text>}>
              <Text type='secondary'>{e.answer}</Text>
              <Divider style={{ marginBottom: 0 }} />
            </Panel>
          ))}
        </Collapse>

        <Row justify='end'>
          <Pagination
            size='small'
            current={page}
            total={data.length}
            pageSize={pageSize}
            onChange={value => setPage(value)}
          />
        </Row>
      </Space>
    </>
  )
}
