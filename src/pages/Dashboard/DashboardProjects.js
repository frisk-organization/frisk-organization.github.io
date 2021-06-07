import React, { useCallback } from 'react'

import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { Button, Card, Col, Divider, Row, Tag, Tooltip, Typography } from 'antd'
import {
  StarFilled,
  RightOutlined,
  GithubOutlined,
  SelectOutlined,
  AppstoreOutlined,
  PlusCircleOutlined,
  FundProjectionScreenOutlined
} from '@ant-design/icons'

import { Loading } from 'components'
import { intToString } from 'utils/formatter'
import { useQueryTopProjects } from 'queries/projects'

const { Title, Paragraph, Text } = Typography

export const DashboardProjects = ({ ...props }) => {
  const [t] = useTranslation()

  const { data = [], isLoading } = useQueryTopProjects()

  const translate = useCallback(
    (key, options) => t(`dashboard:${key}`, options),
    [t]
  )

  return (
    <Row {...props}>
      <Row align='middle' justify='space-between' style={{ width: '100%' }}>
        <Title level={3}>
          <FundProjectionScreenOutlined style={{ marginRight: 10 }} />
          {translate('topProjects')}
        </Title>

        <Link to='/projects'>
          <Button type='link'>
            {translate('seeProjects')}
            <RightOutlined style={{ marginLeft: 5, fontSize: 12 }} />
          </Button>
        </Link>
      </Row>

      <Divider style={{ marginTop: 0 }} />

      {isLoading && <Loading style={{ margin: '20px auto' }} />}

      {!isLoading && (
        <Row style={{ width: '100%' }} gutter={[16, 16]}>
          {data.map(item => (
            <Col xs={24} sm={12} md={8} lg={6} key={item.id}>
              <Card
                style={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column'
                }}
                bodyStyle={{ padding: '12px 16px', flex: 1 }}
                actions={[
                  <Tooltip key='github' title={translate('seeGithub')}>
                    <Link to={{ pathname: item.link }} target='_blank'>
                      <GithubOutlined />
                    </Link>
                  </Tooltip>,
                  <Tooltip key='issues' title={translate('seeIssues')}>
                    <Link to={`/projects/${item.id}`}>
                      <AppstoreOutlined />
                    </Link>
                  </Tooltip>,
                  <Tooltip key='session' title={translate('openSession')}>
                    <SelectOutlined />
                  </Tooltip>
                ]}
              >
                <Row justify='space-between'>
                  <Text strong>{item.name}</Text>

                  <Text type='secondary'>
                    <StarFilled style={{ marginRight: 3 }} />
                    {intToString(item.stars)}
                  </Text>
                </Row>

                <Row style={{ marginTop: 8 }}>
                  <Paragraph type='secondary' ellipsis={{ rows: 2 }}>
                    {item.description}
                  </Paragraph>
                </Row>

                {item.tags.length > 0 && (
                  <Row style={{ marginBottom: 8 }}>
                    {item.tags.slice(0, 4).map(tag => (
                      <Tag key={tag} color='processing'>
                        {tag}
                      </Tag>
                    ))}

                    {item.tags.length > 4 && (
                      <Tooltip
                        placement='bottom'
                        title={
                          <Row style={{ flexDirection: 'column' }}>
                            {item.tags.slice(4, item.tags.length).map(tag => (
                              <Paragraph
                                key={tag}
                                style={{ margin: 0, color: 'white' }}
                              >
                                {tag}
                              </Paragraph>
                            ))}
                          </Row>
                        }
                      >
                        <Tag color='processing'>{`+${
                          item.tags.length - 4
                        }`}</Tag>
                      </Tooltip>
                    )}
                  </Row>
                )}

                <Row>
                  <Text style={{ marginRight: 5 }}>
                    {translate('languages')}
                  </Text>
                  <Text type='secondary'>
                    {item.languages.slice(0, 5).join(', ')}
                  </Text>
                </Row>
              </Card>
            </Col>
          ))}

          <Col xs={24} sm={12} md={8} lg={6}>
            <Link to='/projects/new'>
              <Card
                style={{
                  height: '100%',
                  display: 'flex',
                  cursor: 'pointer',
                  flexDirection: 'column'
                }}
                bodyStyle={{ padding: '12px 16px', flex: 1 }}
              >
                <Row
                  align='middle'
                  justify='center'
                  style={{ flexDirection: 'column', height: '100%' }}
                >
                  <PlusCircleOutlined style={{ fontSize: 28 }} />
                  <Text style={{ marginTop: 10 }}>
                    {translate('addProject')}
                  </Text>
                </Row>
              </Card>
            </Link>
          </Col>
        </Row>
      )}
    </Row>
  )
}
