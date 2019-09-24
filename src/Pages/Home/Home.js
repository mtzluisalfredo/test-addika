import React, { useEffect } from 'react';
import { Button, Menu, Dropdown, Icon } from 'antd';
import useForecast from '../../store/climate/hooks/hookForecast';
import { ForecastDay, SideBar } from '../../Components';
import './style.scss';

export default function Home() {
  const [climate, isLoading, requestForecast, requestItem, requestTypeUnit] = useForecast();
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
  let renderDaySelected = {};
  let renderType = '';

  if (climate && !isLoading) {
    const { itemSelected, forecastState, typeCelsius } = climate;
    renderDaySelected = itemSelected;
    renderType = typeCelsius ? '°C' : '°F';
    renderDays = forecastState.forecast.forecastday.map((item, index) => (
      <ForecastDay
        renderType={renderType}
        typeCelsius={typeCelsius}
        click={selected => requestItem(Object.assign(selected, forecastState.location))}
        index={index}
        item={item}
      />
    ));
  }

  const menu = (
    <Menu style={{ marginLeft: 8 }}>
      <Menu.Item>
        <Button id='type-c' onClick={() => requestTypeUnit(true)} type='link'>°C</Button>
      </Menu.Item>
      <Menu.Item>
        <Button id='type-f' onClick={() => requestTypeUnit(false)} type='link'>°F</Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className='container'>
      <SideBar itemSelected={renderDaySelected} />
      <div className='main'>
        <div className='flex actions-content'>
          <div className='flex btn-actions'>
            <Button onClick={() => requestForecast()} type='primary'>Start new forecast</Button>
            <Dropdown placement='bottomLeft' overlay={menu}>
              <span>
                {renderType}
                <Icon type='down' />
              </span>
            </Dropdown>
          </div>
        </div>
        <section className='cards'>
          {renderDays}
        </section>
      </div>
    </div>
  );
}
