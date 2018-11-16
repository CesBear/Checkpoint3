import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Header from './header';
import Providers from '../providers';
import AddProviders from '../providers/addProviders';
import * as Paths from '../paths';
import '../assets/App.css';



class App extends Component {
  render() {
    return (
      <div >
      	<BrowserRouter>
      		<div>
      			<Header />
      			<br />
      			<div className='container' >
      				<Route exact path={Paths.PROVIDERS} component= {Providers} />
              <Route exact path={Paths.ADD_PROVIDERS} component= {AddProviders} />

      			</div>
      		</div>
      	</BrowserRouter>
      </div>
    );
  }
}

export default App;
