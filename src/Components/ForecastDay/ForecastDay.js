import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Button } from 'antd';
import './style.scss';

const { Text } = Typography;

const ForecastDay = ({ item, index, click }) => {
  const { date, day } = item;
  const { condition, maxtemp_c, mintemp_c } = day;
  const { icon, text } = condition;

  return (
    <Button
      key={`${index.toString()}item`}
      onClick={() => click(item)}
      className='flex article-img'
    >
      <div className='item-date'><Text>{date}</Text></div>
      <img src={icon} alt='icon climate addika' />
      <Text>{`${maxtemp_c}/${mintemp_c}`}</Text>
      <div className='item-footer'><Text>{text}</Text></div>
    </Button>
  );
};

ForecastDay.propTypes = {
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

export default ForecastDay;
