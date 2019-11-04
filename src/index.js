import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/App';


ReactDOM.render(
    <BrowserRouter>
        <Route component={App} />
    </BrowserRouter>, 
  document.querySelector('#root')
);    