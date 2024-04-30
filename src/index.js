import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './layout/Header';
import DestinationIndex from './components/DestinationIndex';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { destinationAPI } from './api/destinationAPI';
import DestinationList from './components/DestinationList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<ApiProvider api={destinationAPI}>
  <Header/>
  <DestinationIndex/>
  <DestinationList/>
</ApiProvider>
  </React.StrictMode>
);

let a = 10;
console.log(a); 