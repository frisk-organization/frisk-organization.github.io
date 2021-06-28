import React, { useCallback } from 'react'

import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { Col, Row, Tag, List, Divider, Tooltip, Typography } from 'antd'
import {
  GithubOutlined,
  SelectOutlined,
  MessageOutlined,
  ContainerOutlined
} from '@ant-design/icons'

import { Loading } from 'components'
import { useQueryRecentsIssues } from 'queries/issues'

const { Title, Paragraph, Text } = Typography

export const DashboardIssues = ({ ...props }) => {
  const [t] = useTranslation()

  const { data = [], isLoading } = useQueryRecentsIssues()

  const translate = useCallback(
    (key, options) => t(`dashboard:${key}`, options),
    [t]
  )

  return (
    <Row {...props}>
      <Row align='middle' style={{ width: '100%' }}>
        <Title level={3}>
          <ContainerOutlined style={{ marginRight: 10 }} />
          {translate('recentIssues')}
        </Title>
      </Row>

      <Divider style={{ marginTop: 0 }} />

      {isLoading && (
        <Row style={{ width: '100%' }}>
          <Loading style={{ margin: '20px auto' }} />
        </Row>
      )}

      {!isLoading && (
        <Row style={{ width: '100%' }}>
          <List
            dataSource={data}
            style={{ width: '100%' }}
            renderItem={item => (
              <List.Item>
                <Row
                  align='middle'
                  justify='space-between'
                  style={{ width: '100%' }}
                >
                  <Row style={{ flex: 1 }} align='middle' gutter={16}>
                    <Col span={2} style={{ textAlign: 'center' }}>
                      <Paragraph strong style={{ margin: 0 }}>
                        {`#${item.id}`}
                      </Paragraph>

                      <Link to={`/projects/${item.repo.id}`}>
                        <Paragraph type='secondary' style={{ margin: 0 }}>
                          {item.repo.name}
                        </Paragraph>
                      </Link>
                    </Col>

                    <Col>
                      <Paragraph style={{ margin: 0 }}>
                        {item.name}
                        <Text type='secondary' style={{ marginLeft: 10 }}>
                          <MessageOutlined style={{ marginRight: 5 }} />
                          {item.comments}
                        </Text>
                      </Paragraph>

                      <Paragraph style={{ margin: 0 }}>
                        {item.tags.map(tag => (
                          <Tooltip
                            key={tag}
                            placement='bottom'
                            title={translate(`tags:${tag}`)}
                          >
                            <Tag color='processing'>{tag}</Tag>
                          </Tooltip>
                        ))}
                      </Paragraph>
                    </Col>
                  </Row>

                  <Row align='middle'>
                    <Link target='_blank' to={{ pathname: item.link }}>
                      <Tooltip
                        placement='bottom'
                        title={translate('seeGithub')}
                      >
                        <Text>
                          <GithubOutlined />
                        </Text>
                      </Tooltip>
                    </Link>

                    <Divider type='vertical' />

                    <Tooltip
                      placement='bottom'
                      title={translate('openSession')}
                    >
                      <SelectOutlined />
                    </Tooltip>
                  </Row>
                </Row>
              </List.Item>
            )}
          />
        </Row>
      )}
    </Row>
  )
}
