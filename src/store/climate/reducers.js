import { GET_FORECAST } from "./actions";

export const INITIAL_STATE = {
  forecastState: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_FORECAST:
      return {
        ...state,
        forecastState: action.payload
      };
    default:
      return state;
  }
};
