import climateReducer from './climate/reducers';

export default ({ climate }, action) => {
  return {
    climate: climateReducer(climate, action),
  };
};
