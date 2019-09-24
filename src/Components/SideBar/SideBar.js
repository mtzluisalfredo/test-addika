import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from 'antd';
import './style.scss';

const { Title } = Typography;

const SideBar = ({ itemSelected }) => {
  const { name, region, country, date, day, astro } = itemSelected;
  const dayTitle = day ? day.condition.text : '';
  const dayIcon = day ? day.condition.icon : '';
  const dayAstro = astro || {};

  let renderDayAstro = <div />;

  if (Object.keys(dayAstro).length > 0) {
    renderDayAstro = Object.entries(dayAstro).map(([key, value]) => (
      <p>
        <strong key={key}>
          <span>{value.toString()}</span>
          {' '}
          {key}
        </strong>
      </p>
    ));
  }


  return (
    <div className='nav flex'>
      <div className='ad-wrapper-title'><Title className='nav-title'>{dayTitle}</Title></div>
      <img src={dayIcon} alt='icon climate addika' />
      <Title className='nav-title' level={4}>{date}</Title>
      <Title className='nav-title' level={4}>{`${name}, ${region}, ${country}`}</Title>
      <div className='item-astro'>{renderDayAstro}</div>
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
    astro: PropTypes.shape({}),
    day: PropTypes.shape({
      condition: PropTypes.shape({
        text: PropTypes.string,
        icon: PropTypes.string,
      }),
    }),
  }),
};

export default SideBar;
