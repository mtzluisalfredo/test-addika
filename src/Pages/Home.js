import React, { useEffect } from 'react';
import useForecast from '../store/climate/hooks/hookForecast';
import { DayItem, SideBar } from '../Components';

export default function Home() {
  const [climate, isLoading, requestForecast, requestItem] = useForecast();
  useEffect(() => {
    if (!climate) {
      requestForecast();
    }
    if (climate) {
      const { itemSelected, forecastState } = climate;
      if (!itemSelected) {
        requestItem(Object.assign(forecastState.forecast.forecastday[0], forecastState.location));
      }
    }
  }, [climate]);

  let renderDays = <div>No hay pronóstico</div>;
  let renderDaySelected = { title: 'Moderate or heavy rain shower' };

  if (climate && !isLoading) {
    const { itemSelected, forecastState } = climate;
    renderDaySelected = itemSelected;
    renderDays = forecastState.forecast.forecastday.map((item, index) => (
      <DayItem
        click={selected => requestItem(Object.assign(selected, forecastState.location))}
        index={index}
        item={item}
      />
    ));
  }

  return (
    <div className='container'>
      <SideBar itemSelected={renderDaySelected} />
      <div className='main'>
        <section className='cards'>
          {renderDays}
        </section>
      </div>
    </div>
  );
}
