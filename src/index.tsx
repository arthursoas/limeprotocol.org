import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

// Components
import LeftMenu from './components/menu/menu';

// Modules
import Specification from './modules/specification/specification';

// Styles
import './assets/css/index.scss';

render((
  <div className="min-vh-100 flex">
    <HashRouter basename="/">
      <LeftMenu />
      <div className="w-100 mw5 mw9-ns center pa3 ph5-ns">
        <Switch>
          <Route exact path="/">
            <Redirect to="/specification" />
          </Route>
          <Route path='/specification'>
            <Specification/>
          </Route>
        </Switch>
      </div>
    </HashRouter>
  </div>
), document.getElementById('root'));