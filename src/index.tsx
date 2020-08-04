import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Menu } from '@blueprintjs/core';

// Modules
import Home from './modules/home/home';

// Styles
import './assets/css/index.scss';

render((
  <div className="min-vh-100 flex">
    <HashRouter basename="/">
      <div className="min-vh-100">
        <Menu>
          <Menu.Item text="Specification" href="#home">
            <Menu.Item text="What is it?" href="#home/#what"/>
            <Menu.Item text="Why not XMPP?" href="#home/#xmpp"/>
            <Menu.Item text="Concepts" href="#home/#concepts"/>
            <Menu.Item text="Envelope"/>
            <Menu.Item text="Message"/>
            <Menu.Item text="Notification"/>
            <Menu.Item text="Command"/>
            <Menu.Item text="Session"/>
          </Menu.Item>
          <Menu.Item onClick={() => alert('object')} text="Content Types"/>
          <Menu.Item onClick={() => alert('link')} text="Resources"/>
          <Menu.Item onClick={() => alert('link')} text="Libraries"/>
          <Menu.Item onClick={() => alert('link')} text="About"/>
        </Menu>
      </div>
      <div className="w-100">
        <Switch>
          <Route exact path='/home' component={Home} />
        </Switch>
      </div>
    </HashRouter>
  </div>
), document.getElementById('root'));