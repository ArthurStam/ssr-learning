import React  from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { About } from './Pages/About';
import { Home } from './Pages/Home';
import './App.css';

export const App = () => {
  return (
    <div className="App">
      <div className="App__header">
        <Link to="/">Main</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="App__content">
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <div className="App__footer">footer</div>
    </div>
  )
}
