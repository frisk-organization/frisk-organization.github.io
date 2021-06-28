import React, { useCallback, useEffect, useMemo, useState } from 'react'

import { useTranslation } from 'react-i18next'
import { Link, useHistory, useParams } from 'react-router-dom'

import {
  StarFilled,
  GithubOutlined,
  SelectOutlined,
  MessageOutlined
} from '@ant-design/icons'
import {
  Col,
  Row,
  Tag,
  Tabs,
  List,
  Button,
  Divider,
  Tooltip,
  Pagination,
  Typography,
  PageHeader
} from 'antd'

import { Loading } from 'components'
import Error500 from 'pages/Error500'
import { setPageTitle } from 'utils/control'
import { intToString } from 'utils/formatter'
import { useQueryProject } from 'queries/projects'

const { Text, Paragraph } = Typography

export const ProjectsDetails = () => {
  const [t] = useTranslation()
  const history = useHistory()
  const { id = '' } = useParams()

  const [page, setPage] = useState(1)

  const { data, isLoading } = useQueryProject({ id })

  const pageSize = 20

  useEffect(() => {
    if (!isLoading && data) {
      setPageTitle(`${t(`links:projects`)} | ${data.name}`)
    }
  }, [data, t, isLoading])

  const translate = useCallback(
    (key, options) => t(`projects:${key}`, options),
    [t]
  )

  const issues = useMemo(() => {
    if (data?.issues) {
      return [...data?.issues.slice(pageSize * (page - 1), pageSize * page)]
    }

    return []
  }, [data, page])

  const goToProjects = () => history.push('/projects')

  if (isLoading) {
    return (
      <Row>
        <Loading style={{ margin: 'auto' }} />
      </Row>
    )
  }

  if (!data) {
    return (
      <Error500
        goBack={goToProjects}
        title={translate('noProject:title')}
        extra={translate('noProject:extra')}
        buttonText={translate('noProject:button')}
        description={translate('noProject:description')}
      />
    )
  }

  return (
    <>
      <PageHeader
        onBack={goToProjects}
        className='site-page-header'
        title={data?.name}
        subTitle={
          <Row align='middle'>
            <StarFilled style={{ marginRight: 3 }} />
            {intToString(data?.stars)}
          </Row>
        }
        extra={[
          <Link key='github' to={{ pathname: data?.link }} target='_blank'>
            <Button icon={<GithubOutlined />}>{translate('seeGithub')}</Button>
          </Link>,
          <Button key='session' icon={<SelectOutlined />} type='primary'>
            {translate('openSession')}
          </Button>
        ]}
        footer={
          <Tabs defaultActiveKey='issues'>
            <Tabs.TabPane tab={translate('issues')} key='issues' />
          </Tabs>
        }
      >
        {data?.description}

        <Row>
          <Text style={{ marginRight: 5 }} strong>
            {translate('languages')}
          </Text>

          <Text type='secondary'>{data?.languages.join(', ')}.</Text>
        </Row>

        {data?.tags?.length > 0 && (
          <Row style={{ marginTop: 10 }}>
            {data?.tags.map(tag => (
              <Tag key={tag} color='processing'>
                {tag}
              </Tag>
            ))}
          </Row>
        )}
      </PageHeader>

      <Row style={{ marginTop: '20px', width: '100%' }}>
        <List
          dataSource={issues}
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
                    <Tooltip placement='bottom' title={translate('seeGithub')}>
                      <Text>
                        <GithubOutlined />
                      </Text>
                    </Tooltip>
                  </Link>

                  <Divider type='vertical' />

                  <Tooltip placement='bottom' title={translate('openSession')}>
                    <SelectOutlined />
                  </Tooltip>
                </Row>
              </Row>
            </List.Item>
          )}
        />
      </Row>

      <Row justify='end' style={{ marginTop: '20px' }}>
        <Pagination
          size='small'
          current={page}
          pageSize={pageSize}
          total={data?.issues?.length}
          onChange={value => setPage(value)}
        />
      </Row>
    </>
  )
}
