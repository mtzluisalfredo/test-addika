import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Row, Col } from 'antd';

const { Header } = Layout;

const HeaderCustom = ({ content }) => (
  <Layout className='bg-dynamic'>
    <Header>
      <Row>
        <Col span={18} push={6}>
          Luis
        </Col>
        <Col className='logo-header' span={6} pull={18}>
          Alfredo
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
