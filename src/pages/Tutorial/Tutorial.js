import React, { useCallback } from 'react'

import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { Anchor, Col, Divider, Row, Typography } from 'antd'

const { Title, Text, Paragraph } = Typography

export const Tutorial = () => {
  const [t] = useTranslation()

  const translate = useCallback(
    (key, options) => t(`tutorial:${key}`, options),
    [t]
  )

  return (
    <Row>
      <Col span={21}>
        <Row id='intro' justify='center' style={{ width: '100%' }}>
          <Col xs={24} sm={20} md={16} lg={14} xl={12}>
            <Title level={2} style={{ textAlign: 'center' }}>
              {translate('intro:title')}
            </Title>

            <Title level={5} type='secondary' style={{ textAlign: 'center' }}>
              {translate('intro:subtitle')}
            </Title>
          </Col>
        </Row>

        <Row style={{ width: '100%' }} justify='end'>
          <Text italic strong type='secondary'>
            {translate('intro:date')}
          </Text>
        </Row>

        <Divider style={{ marginTop: 0 }} />

        <Paragraph id='background'>
          {translate('background:description')}
        </Paragraph>

        <Paragraph>
          <ul>
            <li>
              <Text strong>{translate('background:session:title')}</Text>
              <Text style={{ marginLeft: 5 }}>
                {translate('background:session:content')}
              </Text>
            </li>

            <li>
              <Text strong>{translate('background:virtualMachine:title')}</Text>
              <Text style={{ marginLeft: 5 }}>
                {translate('background:virtualMachine:content')}
              </Text>
            </li>

            <li>
              <Text strong>{translate('background:docker:title')}</Text>
              <Text style={{ marginLeft: 5 }}>
                {translate('background:docker:content1')}
              </Text>
              <Text code style={{ marginLeft: 5 }}>
                {translate('background:docker:code1')}
              </Text>

              <Text style={{ marginLeft: 5 }}>
                {translate('background:docker:content2')}
              </Text>
              <Text code style={{ marginLeft: 5 }}>
                {translate('background:docker:code2')}
              </Text>

              <Text>{translate('background:docker:end')}</Text>
            </li>

            <li>
              <Text strong>{translate('background:container:title')}</Text>
              <Text style={{ marginLeft: 5 }}>
                {translate('background:container:content1')}
              </Text>
              <Text code style={{ marginLeft: 5 }}>
                {translate('background:container:code1')}
              </Text>

              <Text>{translate('background:container:end')}</Text>
            </li>

            <li>
              <Text strong>{translate('background:card:title')}</Text>
              <Text style={{ marginLeft: 5 }}>
                {translate('background:card:content1')}
              </Text>
              <Text code style={{ marginLeft: 5 }}>
                {translate('background:card:code1')}
              </Text>

              <Text style={{ marginLeft: 5 }}>
                {translate('background:card:content2')}
              </Text>
            </li>
          </ul>
        </Paragraph>

        <Title id='task1' level={3}>
          {translate('task1:title')}
        </Title>
        <Text>{translate('task1:content')}</Text>

        <Title id='task2' level={3}>
          {translate('task2:title')}
        </Title>
        <Text>{translate('task2:content1')}</Text>
        <Paragraph>{translate('task2:content2')}</Paragraph>

        <Paragraph>
          <ul>
            <li>
              <Text>{translate('task2:option1')}</Text>
            </li>

            <li>
              <Text>{translate('task2:option2:content1')}</Text>
              <Text code style={{ marginLeft: 5 }}>
                {translate('task2:option2:code1')}
              </Text>
              <Text style={{ marginLeft: 5 }}>
                {translate('task2:option2:content2')}
              </Text>

              <Text strong style={{ marginLeft: 5 }}>
                {translate('task2:option2:strong1')}
              </Text>
              <Text style={{ marginLeft: 5 }}>
                {translate('task2:option2:content3')}
              </Text>
            </li>

            <li>
              <Text>{translate('task2:option3')}</Text>
            </li>
          </ul>
        </Paragraph>

        <Title id='task3' level={3}>
          {translate('task3:title')}
        </Title>

        <Paragraph>
          <Text>{translate('task3:content1')}</Text>
          <Text code style={{ marginLeft: 5 }}>
            {translate('task3:code1')}
          </Text>
          <Text style={{ marginLeft: 5 }}>{translate('task3:content2')}</Text>
          <Text code style={{ marginLeft: 5 }}>
            {translate('task3:code2')}
          </Text>
          <Text style={{ marginLeft: 5 }}>{translate('task3:content3')}</Text>
          <Text code style={{ marginLeft: 5 }}>
            {translate('task3:code3')}
          </Text>
          <Text style={{ marginLeft: 5 }}>{translate('task3:content4')}</Text>
        </Paragraph>

        <Paragraph>
          <Text>{translate('task3:content5')}</Text>
          <Text code style={{ marginLeft: 5 }}>
            {translate('task3:code4')}
          </Text>
          <Text style={{ marginLeft: 5 }}>{translate('task3:content6')}</Text>
          <Text code style={{ marginLeft: 5 }}>
            {translate('task3:code5')}
          </Text>
          <Text style={{ marginLeft: 5 }}>{translate('task3:content7')}</Text>
          <Text code style={{ marginLeft: 5 }}>
            {translate('task3:code6')}
          </Text>
          <Text style={{ marginLeft: 5 }}>{translate('task3:content8')}</Text>
          <Text code style={{ marginLeft: 5 }}>
            {translate('task3:code7')}
          </Text>
          <Text style={{ marginLeft: 5 }}>{translate('task3:content9')}</Text>
          <Text code style={{ marginLeft: 5 }}>
            {translate('task3:code8')}
          </Text>
          <Text>{translate('task3:content10')}</Text>
        </Paragraph>

        <Paragraph>
          <pre>
            <Paragraph style={{ margin: 0 }}>
              {translate('task3:lines1')}
            </Paragraph>
            <Paragraph style={{ margin: 0 }}>
              {translate('task3:lines2')}
            </Paragraph>
            <Paragraph style={{ margin: 0 }}>
              {translate('task3:lines3')}
            </Paragraph>
            <Paragraph style={{ margin: 0 }}>
              {translate('task3:lines4')}
            </Paragraph>
            <Paragraph style={{ margin: 0 }}>
              {translate('task3:lines5')}
            </Paragraph>
            <Paragraph style={{ margin: 0 }}>
              {translate('task3:lines6')}
            </Paragraph>
            <Paragraph style={{ margin: 0 }}>
              {translate('task3:lines7')}
            </Paragraph>
            <Paragraph style={{ margin: 0 }}>
              {translate('task3:lines8')}
            </Paragraph>
          </pre>
        </Paragraph>

        <Title id='task4' level={3}>
          {translate('task4:title')}
        </Title>

        <Paragraph>{translate('task4:content1')}</Paragraph>

        <Paragraph>
          <ol>
            <li>
              <Text>{translate('task4:content2')}</Text>

              <pre>{translate('task4:code1')}</pre>

              <pre>
                <Paragraph style={{ margin: 0 }}>
                  {translate('task4:lines1')}
                </Paragraph>
                <Paragraph style={{ margin: 0 }}>
                  {translate('task4:lines2')}
                </Paragraph>
                <Paragraph style={{ margin: 0 }}>
                  {translate('task4:lines3')}
                </Paragraph>
                <Paragraph style={{ margin: 0 }}>
                  {translate('task4:lines4')}
                </Paragraph>
                <Paragraph style={{ margin: 0 }}>
                  {translate('task4:lines5')}
                </Paragraph>
                <Paragraph style={{ margin: 0 }}>
                  {translate('task4:lines6')}
                </Paragraph>
              </pre>

              <Text>{translate('task4:content3')}</Text>

              <ul>
                <li>
                  <Link
                    target='_blank'
                    style={{ marginRight: 5 }}
                    to='https://docs.docker.com/engine/reference/builder/#from'
                  >
                    {translate('task4:from:title')}
                  </Link>
                  <Text>{translate('task4:from:content1')}</Text>
                  <Text code style={{ marginLeft: 5 }}>
                    {translate('task4:from:code1')}
                  </Text>
                  <Text>{translate('task4:from:content2')}</Text>
                </li>

                <li>
                  <Link
                    target='_blank'
                    style={{ marginRight: 5 }}
                    to='https://docs.docker.com/engine/reference/builder/#run'
                  >
                    {translate('task4:run:title')}
                  </Link>
                  <Text>{translate('task4:run:content')}</Text>
                </li>

                <li>
                  <Link
                    target='_blank'
                    style={{ marginRight: 5 }}
                    to='https://docs.docker.com/engine/reference/builder/#workdir'
                  >
                    {translate('task4:workdir:title')}
                  </Link>
                  <Text>{translate('task4:workdir:content')}</Text>
                </li>

                <li>
                  <Link
                    target='_blank'
                    style={{ marginRight: 5 }}
                    to='https://docs.docker.com/engine/reference/builder/#copy'
                  >
                    {translate('task4:copy:title')}
                  </Link>
                  <Text>{translate('task4:copy:content1')}</Text>
                  <Text code style={{ marginLeft: 5 }}>
                    {translate('task4:copy:code1')}
                  </Text>
                  <Text style={{ marginLeft: 5 }}>
                    {translate('task4:copy:content2')}
                  </Text>
                  <Text code style={{ marginLeft: 5 }}>
                    {translate('task4:copy:code2')}
                  </Text>
                  <Text style={{ marginLeft: 5 }}>
                    {translate('task4:copy:content3')}
                  </Text>
                  <Text code style={{ marginLeft: 5 }}>
                    {translate('task4:copy:code3')}
                  </Text>
                  <Text style={{ marginLeft: 5 }}>
                    {translate('task4:copy:content4')}
                  </Text>
                </li>

                <li>
                  <Link
                    target='_blank'
                    style={{ marginRight: 5 }}
                    to='https://docs.docker.com/engine/reference/builder/#expose'
                  >
                    {translate('task4:expose:title')}
                  </Link>
                  <Text>{translate('task4:expose:content')}</Text>
                </li>

                <li>
                  <Link
                    target='_blank'
                    style={{ marginRight: 5 }}
                    to='https://docs.docker.com/engine/reference/builder/#cmd'
                  >
                    {translate('task4:cmd:title')}
                  </Link>
                  <Text>{translate('task4:cmd:content')}</Text>
                </li>
              </ul>
            </li>

            <li>
              <Text>{translate('task4:content4')}</Text>
              <pre>{translate('task4:code2')}</pre>

              <ul>
                <li>
                  <Text>{translate('task4:the')}</Text>
                  <Text code style={{ marginLeft: 5 }}>
                    {translate('task4:code3')}
                  </Text>
                  <Text style={{ marginLeft: 5 }}>
                    {translate('task4:content6')}
                  </Text>
                </li>

                <li>
                  <Text>{translate('task4:the')}</Text>
                  <Text code style={{ marginLeft: 5 }}>
                    {translate('task4:code4')}
                  </Text>
                  <Text style={{ marginLeft: 5 }}>
                    {translate('task4:content7')}
                  </Text>
                  <Text code style={{ marginLeft: 5 }}>
                    {translate('task4:code5')}
                  </Text>
                </li>
              </ul>

              <Paragraph>
                <Text>{translate('task4:content8')}</Text>
                <Text code style={{ marginLeft: 5 }}>
                  {translate('task4:express')}
                </Text>
                <Text style={{ marginLeft: 5 }}>
                  {translate('task4:content9')}
                </Text>
                <Text strong style={{ marginLeft: 5 }}>
                  {translate('task4:strong1')}
                </Text>
                <Text style={{ marginLeft: 5 }}>
                  {translate('task4:content10')}
                </Text>
                <Text code style={{ marginLeft: 5 }}>
                  {translate('task4:express')}
                </Text>
                <Text style={{ marginLeft: 5 }}>
                  {translate('task4:content11')}
                </Text>
                <Text code style={{ marginLeft: 5 }}>
                  {translate('task4:code6')}
                </Text>
                <Text>{translate('task4:end')}</Text>
              </Paragraph>
            </li>
          </ol>
        </Paragraph>

        <Title id='task5' level={3}>
          {translate('task5:title')}
        </Title>

        <Paragraph>
          <ol>
            <li>
              <Text>{translate('task5:content1')}</Text>
              <pre>{translate('task5:code1')}</pre>

              <Paragraph>
                <Text>{translate('task5:content2')}</Text>
                <Text code style={{ marginLeft: 5 }}>
                  {translate('task5:code2')}
                </Text>
                <Text style={{ marginLeft: 5 }}>
                  {translate('task5:content3')}
                </Text>
                <Text code style={{ marginLeft: 5 }}>
                  {translate('task5:code3')}
                </Text>
                <Text style={{ marginLeft: 5 }}>
                  {translate('task5:content4')}
                </Text>
              </Paragraph>
            </li>

            <li>
              <Text>{translate('task5:content5')}</Text>

              <ul>
                <li>
                  <Text>{translate('task5:content6')}</Text>
                  <Text code style={{ marginLeft: 5 }}>
                    {translate('task5:code4')}
                  </Text>
                  <Text>{translate('task5:content7')}</Text>
                  <Text code style={{ marginLeft: 5 }}>
                    {translate('task5:code5')}
                  </Text>
                  <Text>{translate('task5:content8')}</Text>
                </li>

                <li>
                  <Text>{translate('task5:content9')}</Text>
                  <Text strong style={{ marginLeft: 5 }}>
                    {translate('task5:strong1')}
                  </Text>
                  <Text style={{ marginLeft: 5 }}>
                    {translate('task5:content10')}
                  </Text>
                  <Text code style={{ marginLeft: 5 }}>
                    {translate('task5:code6')}
                  </Text>
                  <Text>{translate('task5:end')}</Text>
                </li>
              </ul>
            </li>
          </ol>
        </Paragraph>

        <Title id='task6' level={3}>
          {translate('task6:title')}
        </Title>
        <Paragraph>{translate('task6:content')}</Paragraph>

        <Paragraph>
          <ol>
            <li>
              <Text>{translate('task6:step1')}</Text>
            </li>

            <li>
              <Text>{translate('task6:step2')}</Text>
            </li>

            <li>
              <Text>{translate('task6:step3:content1')}</Text>
              <Text strong style={{ marginLeft: 5 }}>
                {translate('task6:step3:strong1')}
              </Text>
              <Text style={{ marginLeft: 5 }}>
                {translate('task6:step3:content2')}
              </Text>
            </li>

            <li>
              <Text>{translate('task6:step4:content1')}</Text>
              <Text code style={{ marginLeft: 5 }}>
                {translate('task6:step4:code1')}
              </Text>
              <Text style={{ marginLeft: 5 }}>
                {translate('task6:step4:content2')}
              </Text>
            </li>
          </ol>
        </Paragraph>

        <Title id='task7' level={3}>
          {translate('task7:title')}
        </Title>
        <Text>{translate('task7:content')}</Text>

        <Title id='task8' level={3}>
          {translate('task8:title')}
        </Title>

        <Paragraph>
          <Text>{translate('task8:content1')}</Text>
          <Text italic style={{ marginLeft: 5 }}>
            {translate('task8:card')}
          </Text>
          <Text style={{ marginLeft: 5 }}>{translate('task8:content2')}</Text>
          <Text strong style={{ marginLeft: 5 }}>
            {translate('task8:build')}
          </Text>
          <Text style={{ marginLeft: 5 }}>{translate('task8:content3')}</Text>
        </Paragraph>

        <Paragraph>
          <Text>{translate('task8:content4')}</Text>
          <Text italic style={{ marginLeft: 5 }}>
            {translate('task8:card')}
          </Text>
          <Text style={{ marginLeft: 5 }}>{translate('task8:content5')}</Text>
          <Text italic style={{ marginLeft: 5 }}>
            {translate('task8:italic1')}
          </Text>
          <Text style={{ marginLeft: 5 }}>{translate('task8:content6')}</Text>
          <Text italic style={{ marginLeft: 5 }}>
            {translate('task8:italic2')}
          </Text>
          <Text style={{ marginLeft: 5 }}>{translate('task8:content7')}</Text>
          <Text strong style={{ marginLeft: 5 }}>
            {translate('task8:build')}
          </Text>
          <Text style={{ marginLeft: 5 }}>{translate('task8:content8')}</Text>
          <Text strong style={{ marginLeft: 5 }}>
            {translate('task8:strong1')}
          </Text>
          <Text style={{ marginLeft: 5 }}>{translate('task8:content9')}</Text>
          <Text code style={{ marginLeft: 5 }}>
            {translate('task8:code1')}
          </Text>
        </Paragraph>
      </Col>

      <Col push={1} span={2}>
        <Anchor offsetTop={100}>
          <Anchor.Link href='#intro' title={translate('anchor:intro')} />
          <Anchor.Link
            href='#background'
            title={translate('anchor:background')}
          />
          <Anchor.Link href='#task1' title={translate('anchor:task1')} />
          <Anchor.Link href='#task2' title={translate('anchor:task2')} />
          <Anchor.Link href='#task3' title={translate('anchor:task3')} />
          <Anchor.Link href='#task4' title={translate('anchor:task4')} />
          <Anchor.Link href='#task5' title={translate('anchor:task5')} />
          <Anchor.Link href='#task6' title={translate('anchor:task6')} />
          <Anchor.Link href='#task7' title={translate('anchor:task7')} />
          <Anchor.Link href='#task8' title={translate('anchor:task8')} />
        </Anchor>
      </Col>
    </Row>
  )
}
