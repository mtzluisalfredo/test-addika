import React, { useEffect } from 'react';
import { Typography } from 'antd';
import useForecast from '../store/climate/hooks/hookForecast';
import icon from '../assets/climate-icon.png';

const { Title } = Typography;

export default function Home() {
  const [climate, isLoading, requestForecast] = useForecast();
  useEffect(() => {
    requestForecast();
  }, []);

  let renderDays = <></>;

  if (climate && !isLoading) {
    renderDays = climate.forecastState.forecast.forecastday.map(() => (
      <div className='flex article-img shadow'>
        <div className='item-date'>Luis</div>
        <img className='climate-icon' src={icon} alt='icon climate addika' />
        <p>Luis</p>
        <p>Alfredo</p>
      </div>
    ));
  }

  return (
    <div className='container'>
      <div className='nav flex'>
        <Title className='nav-title'>Moderate or heavy rain shower</Title>
        <img className='climate-icon' src={icon} alt='icon climate addika' />
        <Title className='nav-title' level={4}>2019-08-15</Title>
        <Title className='nav-title' level={4}>Zapopan, Jalisco, México</Title>
      </div>
      <div className='main'>
        <section className='cards'>
          {renderDays}
        </section>
      </div>
    </div>
  );
}
