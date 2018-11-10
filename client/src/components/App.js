import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Header from './Header';
// import Comentarios from './Comentarios';
// import ComentariosAgregar from './Comentarios/Agregar';
// import ComentariosEditar from './Comentarios/Editar';
import Airlines from './Airlines';
import Users from './Users';

// import UsuariosAgregar from './Usuarios/Agregar';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <br />
            <div className="container">
              <Route exact path='/' component={App} />
              <Route exact path='/airlines' component={Airlines} />
              <Route exact path='/users' component={Users} />
            </div> 
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
