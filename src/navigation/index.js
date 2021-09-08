import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Footer, Header } from '../component';
import { About, Department, Teams } from '../pages';
import './index.css';

const Navigator = () => (
  <Router>
    <Header />
    <div className='body-content'>
      <Switch>
        <Route exact path='/'>
          <About />
        </Route>
        <Route exact path='/team'>
          <Teams />
        </Route>
        <Route exact path='/department'>
          <Department />
        </Route>
        <Redirect from='*' to='/' />
      </Switch>
    </div>
    <Footer />
  </Router>
);
export { Navigator };
