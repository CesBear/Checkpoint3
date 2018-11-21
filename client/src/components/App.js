import React, { Component } from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import Header from './header';
import * as Paths from '../path';
import Providers from './providers';
import AddingProviders from './providers/addingProviders';
import Futer from './footer';

const App = (props) => (
  <div>
    <BrowserRouter>
      <div>
        <Header />
        <div className='container' >
          <Route exact path={Paths.DISPLAY_PROVIDERS} component= { Providers } />
          <Route exact path= {Paths.ADD_PROVIDERS} component= { AddingProviders } />
        </div>
        <Futer />
      </div>
    </BrowserRouter>
  </div>
  );

export default App;
