import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from 'antd';

const { Text } = Typography;

const DayItem = ({ item }) => {
  console.log('TCL: DayItem -> item', item.day.condition);
  const { icon, text } = item.day.condition;
  return (
    <div className='flex article-img shadow'>
      <div className='item-date'><Text>Luis</Text></div>
      <img className='climate-icon' src={icon} alt='icon climate addika' />
      <p>Luis</p>
      <div className='item-footer'><Text>{text}</Text></div>
    </div>
  );
};

DayItem.propTypes = {
  item: PropTypes.shape({
    day: PropTypes.shape({
      condition: PropTypes.shape({
        icon: PropTypes.string,
        text: PropTypes.string,
      }),
    }),
  }),
};

export default DayItem;
