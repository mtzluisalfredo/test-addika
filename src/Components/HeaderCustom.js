import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Row, Col, Avatar, Button, Input, Icon } from 'antd';

const { Header } = Layout;

const HeaderCustom = ({ content }) => (
  <Layout className='ad-layout'>
    <Header>
      <Row>
        <Col className='flex' span={12}>
          <Button className='ad-btn-menu' type='primary' icon='menu' />
          <Input
            className='ad-search'
            prefix={<Icon type='search' style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder='large size'
          />
        </Col>
        <Col className='flex ad-header-actions' span={12}>
          <div className='ad-actions-user'>
            <Avatar size='large' icon='user' />
          </div>
        </Col>
      </Row>

    </Header>
    <Layout>
      {content}
    </Layout>
  </Layout>
);

HeaderCustom.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default HeaderCustom;
