import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Card } from '../component';
import { About } from '../pages';

const Navigator = () => (
  <Router>
    <Switch>
      <Route path='/'>
        <About />
      </Route>
      <Route path='/team'>
        <Card
          image_link={
            'https://scontent.fnag1-3.fna.fbcdn.net/v/t1.6435-9/135088208_120602176556309_74981060208068937_n.jpg?_nc_cat=100&ccb=1-4&_nc_sid=09cbfe&_nc_ohc=F3NLkw9Oke4AX_qFR_k&_nc_ht=scontent.fnag1-3.fna&oh=45c34cc82f3e7403da29cbcae8208dec&oe=6130554C'
          }
          name={'Abhay Ahire'}
          fb={'https://facebook.com'}
          insta={'https://instagram.com'}
        />
      </Route>
    </Switch>
  </Router>
);
export default Navigator;
