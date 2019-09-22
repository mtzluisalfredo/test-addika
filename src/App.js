import React from 'react';
import Root from './routes/Index';
import './App.scss';
import { Provider } from './store';

function App() {
  return (
    <Provider>
      <Root />
    </Provider>
  );
}

export default App;
