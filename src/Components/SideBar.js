import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from 'antd';

const { Title } = Typography;

const SideBar = ({ itemSelected }) => {
  const { name, region, country, date, day } = itemSelected;
  const dayTitle = day ? day.condition.text : '';
  const dayIcon = day ? day.condition.icon : '';

  return (
    <div className='nav flex'>
      <Title className='nav-title'>{dayTitle}</Title>
      <img className='climate-icon' src={dayIcon} alt='icon climate addika' />
      <Title className='nav-title' level={4}>{date}</Title>
      <Title className='nav-title' level={4}>{`${name}, ${region}, ${country}`}</Title>
    </div>
  );
};

SideBar.defaultProps = {
  itemSelected: {
    country: '',
    name: '',
    date: '',
    region: '',
    day: {
      condition: {
        text: '',
        icon: '',
      },
    },
  },
};

SideBar.propTypes = {
  itemSelected: PropTypes.shape({
    country: PropTypes.string,
    name: PropTypes.string,
    date: PropTypes.string,
    region: PropTypes.string,
    day: PropTypes.shape({
      condition: PropTypes.shape({
        text: PropTypes.string,
        icon: PropTypes.string,
      }),
    }),
  }),
};

export default SideBar;
