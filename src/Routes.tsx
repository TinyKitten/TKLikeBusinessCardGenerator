import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/atoms/Footer';
import HomePage from './components/pages/Home';
import NoMatchPage from './components/pages/NoMatch';

const Routes: React.FC = () => (
  <Router>
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={NoMatchPage} />
      </Switch>
      <Footer />
    </>
  </Router>
);

export default Routes;
