import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Header from "./Header";
import Shopping from "./Shopping";
import Oc from "./Oc";
class App extends Component {




    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header />
                        <br />
                        <div className="container">
                            <Route exact path='/' />
                            <Route exact path='/providers' />
                            <Route exact path='/shopping' component={Shopping}/>
                            <Route exact path='/purchaseOrders'/>
                            <Route exact path='/oc' component={Oc}/>
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;