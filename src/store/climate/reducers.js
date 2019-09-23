import { GET_FORECAST, SELECT_ITEM } from './actions';

export const INITIAL_STATE = {
  forecastState: null,
  itemSelected: null,
};

export default (state = INITIAL_STATE, action) => {
  const { payload, itemSelected } = action;

  switch (action.type) {
    case GET_FORECAST:
      return {
        ...state,
        forecastState: payload,
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
