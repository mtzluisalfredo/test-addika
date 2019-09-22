import { INCREMENT, DECREMENT } from './../constants/actionTypes';

export const increment = (dispatch) => {
    dispatch({
        type: INCREMENT,
    })
}

export const decrement = (dispatch) => {
    dispatch({
        type: DECREMENT,
    })
}