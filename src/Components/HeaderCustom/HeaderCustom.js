import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Row, Col, Avatar, Button, Input, Icon, Menu, Dropdown, Badge } from 'antd';
import './style.scss';

const { Header } = Layout;
const arrayIcon = [{ icon: 'wechat', count: 0 }, { icon: 'bell', count: 3 }, { icon: 'inbox', count: 4 }];

const menu = (
  <Menu style={{ right: 15 }}>
    <Menu.Item>
      <Button id='action-user-1' type='link'>Action 1</Button>
    </Menu.Item>
    <Menu.Item>
      <Button id='action-user-2' type='link'>Action 1</Button>
    </Menu.Item>
  </Menu>
);


const btnIcons = arrayIcon.map(obj => (
  <div className='ad-wrapper-badge'>
    <Badge className='ad-icon-badge' count={obj.count}>
      <Icon type={obj.icon} theme='outlined' />
    </Badge>
  </div>
));

const HeaderCustom = ({ content }) => (
  <Layout className='ad-layout'>
    <Header>
      <Row>
        <Col className='flex ad-wrapper-btn-menu' span={12}>
          <Button className='ad-btn-menu' type='primary' icon='menu' />
          <Input
            className='ad-search'
            prefix={<Icon type='search' />}
            placeholder='Search for any city...'
          />
        </Col>
        <Col className='flex ad-header-actions'>
          <div className='flex ad-wrapper-notifications'>
            {btnIcons}
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
