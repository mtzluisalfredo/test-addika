import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Button } from 'antd';

const { Text } = Typography;

const DayItem = ({ item, index }) => {
  const { icon, text } = item.day.condition;

  return (
    <Button
      key={`${index.toString()}item`}
      onClick={() => console.log(item)}
      className='flex article-img shadow'
      type='link'
    >
      <div className='item-date'><Text>Luis</Text></div>
      <img className='climate-icon' src={icon} alt='icon climate addika' />
      <p>Luis</p>
      <div className='item-footer'><Text>{text}</Text></div>
    </Button>
  );
};

DayItem.propTypes = {
  index: PropTypes.number,
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
