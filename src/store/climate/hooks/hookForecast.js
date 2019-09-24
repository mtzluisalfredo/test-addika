import { useState } from 'react';
import { useStore } from '../../index';
import forecastQuery from '../queries';
import { forecastAction, selectItemAction, changeUnitMeasureAction } from '../actions';

const useForecast = () => {
  const [{ climate }, dispatch] = useStore();
  const [isLoading, setIsLoading] = useState(false);

  const requestForecast = async () => {
    setIsLoading(true);
    const response = await forecastQuery();
    if (response) {
      dispatch(forecastAction(response));
    } else {
      const err = [];
      dispatch(forecastAction(err));
    }
    setIsLoading(false);
  };

  const requestItem = item => {
    dispatch(selectItemAction(item));
  };

  const requestTypeUnit = type => {
    dispatch(changeUnitMeasureAction(type));
  };

  return [climate, isLoading, requestForecast, requestItem, requestTypeUnit];
};

export default useForecast;
