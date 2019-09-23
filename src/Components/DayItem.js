import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Button } from 'antd';

const { Text } = Typography;

const DayItem = ({ item, index, click }) => {
  const { date, day } = item;
  const { condition, maxtemp_c, mintemp_c } = day;
  const { icon, text } = condition;

  return (
    <Button
      key={`${index.toString()}item`}
      onClick={() => click(item)}
      className='flex article-img shadow'
      type='link'
    >
      <div className='item-date'><Text>{date}</Text></div>
      <img className='climate-icon' src={icon} alt='icon climate addika' />
      <Text>{`${maxtemp_c}/${mintemp_c}`}</Text>
      <div className='item-footer'><Text>{text}</Text></div>
    </Button>
  );
};

DayItem.propTypes = {
  click: PropTypes.func,
  index: PropTypes.number,
  item: PropTypes.shape({
    date: PropTypes.string,
    day: PropTypes.shape({
      maxtemp_c: PropTypes.number,
      mintemp_c: PropTypes.number,
      condition: PropTypes.shape({
        icon: PropTypes.string,
        text: PropTypes.string,
      }),
    }),
  }),
};

export default DayItem;
