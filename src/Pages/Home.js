/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import useForecast from '../store/climate/hooks/hookForecast'


export default function Home(props) {
  const [climate, isLoading, requestForecast] = useForecast();
  console.log('TCL: Home -> setAlbum', requestForecast)
    useEffect(() => {
      requestForecast();
    }, []);

  return (
    <div className='home'>
      <h1>Contador</h1>
    </div>
  )
}