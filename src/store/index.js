import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import reducers from './reducers';
import { INITIAL_STATE as PRODUCT_INITIAL_STATE } from './climate/reducers';

const initialState = {
  product: PRODUCT_INITIAL_STATE,
};

export const Context = createContext();

export const Provider = ({ children }) => (
  <Context.Provider value={useReducer(reducers, initialState)}>
    {children}
  </Context.Provider>
);

Provider.propTypes = {
  children: PropTypes.shape({}),
};


export const useStore = () => useContext(Context);
