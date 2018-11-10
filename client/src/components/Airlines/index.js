import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Collapsible, CollapsibleItem, Button, Preloader } from 'react-materialize';

class Airlines extends Component {

	componentDidMount() {
		this.props.traerUsuarios();
	}

	desplegarUsuarios = () => (
		<Collapsible accordion>
			
		</Collapsible>
	);

	desplegarError = () => (
		<h1 className="red-text">
			{ this.props.error }
		</h1>
	);

	desplegarCargando = () => (
		<div className="center">
			<Preloader size='big'/>
		</div>
	);

	desplegarContenido = () => ( (this.props.error) ? this.desplegarError() : this.desplegarUsuarios() );

	render() {
		return (
			<div>
				<h3 className="valign-wrapper">
					Airlines
					&nbsp;
					<Link to='/usuarios/agregar'>
						<Button floating large className='blue' waves='light' icon='add' />
					</Link>
				</h3>
				{
					(this.props.cargando) ? this.desplegarCargando() : this.desplegarContenido()
				}
			</div>
		);
	}
}

// const mapStateToProps = ({ usuariosReducer }) => {
// 	// usuariosReducer = { usuarios, cargando, error }
// 	// Como se quieren usar los 3 atributos, se manda tal cual el objeto
// 	return usuariosReducer;
// }

 export default Airlines;
