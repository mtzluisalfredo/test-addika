export const GET_FORECAST = 'climate/GET_FORECAST';
export const GET_FORECAST_ERROR = 'climate/GET_FORECAST_ERROR';
export const SELECT_ITEM = 'climate/SELECT_ITEM';

export const forecastAction = payload => {
  return {
    type: GET_FORECAST,
    payload,
  };
};

export const selectItemAction = itemSelected => {
  return {
    type: SELECT_ITEM,
    itemSelected,
  };
};
