import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/elements/Header';
import DomPage from './components/pages/DomPage';
import InfoPage from './components/pages/InfoPage';
import KontaktPage from './components/pages/KontaktPage';
import BiletyPage from './components/pages/BiletyPage';
import './App.css';

class App extends React.Component {
  render() {
    return (
  <div className="App">
    <Header />
    <Route path="/" exact component={DomPage} />
    <Route path="/InfoPage" exact component={InfoPage} />
    <Route path="/KontaktPage" exact component={KontaktPage} />
    <Route path="/BiletyPage" exact component={BiletyPage} />
  </div>
);
}
}

export default App;
