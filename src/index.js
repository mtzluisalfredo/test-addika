
import React from 'react';
import { render } from 'react-dom';
import App from './App';


const root = document.createElement('div');
root.setAttribute('id', 'layoutContent');
document.body.appendChild(root);

const AppRender = (
  <App />
);
render(AppRender, root);
