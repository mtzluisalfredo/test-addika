import { useState } from 'react'
import { useStore } from '../../index'
import { forecastQuery } from '../queries'
import { forecastAction } from '../actions'

const useForecast = () => {
  const [{ climate }, dispatch] = useStore();
  const [isLoading, setIsLoading] = useState(false);

  const requestForecast = async () => {
    setIsLoading(true);
    const response = await forecastQuery();
    if (response ) {
      dispatch(forecastAction(response));
    } else {
      const err = [];
      dispatch(forecastAction(err));
    }
    setIsLoading(false)
  };

  return [climate, isLoading, requestForecast]
};

export default useForecast
