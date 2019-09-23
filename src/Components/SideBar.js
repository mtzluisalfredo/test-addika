import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from 'antd';

const { Title } = Typography;

const SideBar = ({ itemSelected }) => {
  // console.log('TCL: SideBar -> itemSelected', itemSelected)
  const { name, region, country, date, day, astro } = itemSelected;
  const dayTitle = day ? day.condition.text : '';
  const dayIcon = day ? day.condition.icon : '';
  const dayAstro = astro || {};

  let rendeDayAstro = <div />;

  if (Object.keys(dayAstro).length > 0) {
    rendeDayAstro = Object.entries(dayAstro).map(([key, value]) => (
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
      <Title className='nav-title'>{dayTitle}</Title>
      <img className='climate-icon' src={dayIcon} alt='icon climate addika' />
      <Title className='nav-title' level={4}>{date}</Title>
      <Title className='nav-title' level={4}>{`${name}, ${region}, ${country}`}</Title>
      <div className='item-astro'>{rendeDayAstro}</div>
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
