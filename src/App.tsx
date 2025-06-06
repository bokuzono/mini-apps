import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './router/Router';

function App() {
  return (
    <BrowserRouter basename="/mini-apps">
      <Router />
    </BrowserRouter>
  );
}

export default App;
