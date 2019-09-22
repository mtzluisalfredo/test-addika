import React from 'react';
import Root from './routes/Index';
import './App.css';
import { Provider } from './store';

function App() {
  return (
    <Provider>
      <Root />
    </Provider>
  );
}

export default App;
