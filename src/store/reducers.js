import climateReducer from './climate/reducers';

export default ({ climate }, action) => ({
  climate: climateReducer(climate, action)
});