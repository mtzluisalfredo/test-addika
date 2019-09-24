import { GET_FORECAST, SELECT_ITEM, CHANGE_UNIT_MEASURE } from './actions';

export const INITIAL_STATE = {
  forecastState: null,
  itemSelected: null,
  typeCelsius: true,
};

export default (state = INITIAL_STATE, action) => {
  const { payload, itemSelected, typeCelsius } = action;

  switch (action.type) {
    case GET_FORECAST:
      return {
        ...state,
        forecastState: payload,
      };
    case CHANGE_UNIT_MEASURE:
      return {
        ...state,
        typeCelsius,
      };
    case SELECT_ITEM:
      return {
        ...state,
        itemSelected,
      };
    default:
      return state;
  }
};
