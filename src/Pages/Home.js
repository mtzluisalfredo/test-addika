import React, { useEffect } from 'react';
import useForecast from '../store/climate/hooks/hookForecast';
import { DayItem, SideBar } from '../Components';


export default function Home() {
  const [climate, isLoading, requestForecast] = useForecast();
  useEffect(() => {
    requestForecast();
  }, []);

  let renderDays = <div />;

  if (climate && !isLoading) {
    renderDays = climate.forecastState.forecast.forecastday.map(item => (
      <DayItem item={item} />
    ));
  }

  return (
    <div className='container'>
      <SideBar itemSelected={{ title: 'Moderate or heavy rain shower' }} />
      <div className='main'>
        <section className='cards'>
          {renderDays}
        </section>
      </div>
    </div>
  );
}
