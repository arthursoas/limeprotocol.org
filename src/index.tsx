import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';

// Modules
import Home from './modules/home/home';

render((
  <div>
    <HashRouter basename="/">
      <Switch>
        <Route exact path='/' component={Home}/>
      </Switch>
    </HashRouter>
  </div>
), document.getElementById('root'));