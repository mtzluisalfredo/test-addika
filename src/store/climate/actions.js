export const GET_FORECAST = 'climate/GET_FORECAST';
export const GET_FORECAST_ERROR = 'climate/GET_FORECAST_ERROR';

export const forecastAction = payload => {
  return {
    type: GET_FORECAST,
    payload,
  };
};
