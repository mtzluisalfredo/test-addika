import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Row, Col, Avatar, Button, Input, Icon, Menu, Dropdown, Badge } from 'antd';

const { Header } = Layout;

const menu = (
  <Menu style={{ right: 15 }}>
    <Menu.Item>
      <Button type='link'>Action 1</Button>
    </Menu.Item>
    <Menu.Item>
      <Button type='link'>Action 1</Button>
    </Menu.Item>
  </Menu>
);


const HeaderCustom = ({ content }) => (
  <Layout className='ad-layout'>
    <Header>
      <Row>
        <Col className='flex' span={12}>
          <Button className='ad-btn-menu' type='primary' icon='menu' />
          <Input
            className='ad-search'
            prefix={<Icon type='search' style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder='Search for any city...'
          />
        </Col>
        <Col className='flex ad-header-actions' span={12}>
          <div>
            <Badge style={{ left: 8 }} count={2}>
              <Icon type='message' style={{ fontSize: '18px', color: '#08c' }} theme='outlined' />
            </Badge>
          </div>
          <div className='ad-name-user'>
            <Dropdown placement='bottomLeft' overlay={menu}>
              <span>
                Luis Alfredo
                <Icon type='down' />
              </span>
            </Dropdown>
          </div>
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
