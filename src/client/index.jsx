import React from 'react'
import ReactDOM from 'react-dom';
import { App } from '../App';
import { BrowserRouter } from 'react-router-dom';
import { DataProvider } from '../DataProvider';

ReactDOM.render(
  <BrowserRouter>
    <DataProvider initialData={window.appData}>
      <App />
    </DataProvider>
  </BrowserRouter>, document.getElementById('root')
);
