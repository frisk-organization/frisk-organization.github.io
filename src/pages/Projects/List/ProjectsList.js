import React, { useCallback, useMemo, useState } from 'react'

import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import {
  StarFilled,
  GithubOutlined,
  SelectOutlined,
  AppstoreOutlined
} from '@ant-design/icons'
import {
  Col,
  Row,
  Tag,
  Card,
  Divider,
  Tooltip,
  Pagination,
  Typography
} from 'antd'

import { Loading } from 'components'
import { intToString } from 'utils/formatter'
import { useQueryProjects } from 'queries/projects'

const { Title, Text, Paragraph } = Typography

export const ProjectsList = () => {
  const [t] = useTranslation()
  const [page, setPage] = useState(1)

  const pageSize = 12

  const { data = [], isLoading } = useQueryProjects()

  const translate = useCallback(
    (key, options) => t(`projects:${key}`, options),
    [t]
  )

  const projects = useMemo(
    () => [...data.slice(pageSize * (page - 1), pageSize * page)],
    [data, page]
  )

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
        </Col>
      </Row>

      <Divider />

      {isLoading && (
        <Row>
          <Loading style={{ margin: '20px auto' }} />
        </Row>
      )}

      {!isLoading && (
        <>
          <Row style={{ width: '100%' }} gutter={[16, 16]}>
            {projects.map(item => (
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
          </Row>

          <Row justify='end' style={{ marginTop: '20px' }}>
            <Pagination
              size='small'
              current={page}
              total={data.length}
              pageSize={pageSize}
              onChange={value => setPage(value)}
            />
          </Row>
        </>
      )}
    </>
  )
}
