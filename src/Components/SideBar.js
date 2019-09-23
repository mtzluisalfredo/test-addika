import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from 'antd';
import icon from '../assets/climate-icon.png';

const { Title } = Typography;

const SideBar = ({ itemSelected }) => (
  <div className='nav flex'>
    <Title className='nav-title'>{itemSelected.title}</Title>
    <img className='climate-icon' src={icon} alt='icon climate addika' />
    <Title className='nav-title' level={4}>2019-08-15</Title>
    <Title className='nav-title' level={4}>Zapopan, Jalisco, México</Title>
  </div>
);

SideBar.propTypes = {
  itemSelected: PropTypes.shape({
    title: PropTypes.string,
  }),
};

export default SideBar;
