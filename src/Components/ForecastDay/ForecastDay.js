import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Button } from 'antd';
import './style.scss';

const { Text } = Typography;

const ForecastDay = ({ item, index, click, typeCelsius, renderType }) => {
  const { date, day } = item;
  const { condition, maxtemp_c, mintemp_c, maxtemp_f, mintemp_f } = day;
  const { icon, text } = condition;

  const degreesWeather = typeCelsius
    ? `${maxtemp_c}${renderType} / ${mintemp_c}${renderType}`
    : `${maxtemp_f}${renderType} / ${mintemp_f}${renderType}`;

  return (
    <Button
      htmlType='button'
      key={`${index.toString()}item`}
      onClick={() => click(item)}
      className='flex article-img'
    >
      <div className='item-date'><Text>{date}</Text></div>
      <img src={icon} alt='icon climate addika' />
      <Text>{degreesWeather}</Text>
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
      maxtemp_f: PropTypes.number,
      mintemp_f: PropTypes.number,
      condition: PropTypes.shape({
        icon: PropTypes.string,
        text: PropTypes.string,
      }),
    }),
  }),
  renderType: PropTypes.string,
  typeCelsius: PropTypes.bool,
};

export default ForecastDay;
