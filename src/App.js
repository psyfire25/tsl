import React from 'react';
import { Route } from 'react-router-dom';
import InfoPage from './components/pages/InfoPage';
import KontaktPage from './components/pages/KontaktPage';
import BiletyPage from './components/pages/BiletyPage';

const App = () =>
  <div className="App">
    <Route path="/" exact component={InfoPage} />
    <Route path="/" exact component={KontaktPage} />
    <Route path="/" exact component={BiletyPage} />
  </div>

export default App;
