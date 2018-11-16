import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Preloader } from 'react-materialize';
import { Redirect } from 'react-router-dom';
import ProvidersReducer from '../reducers/providersReducer';
import * as ProvidersAction from '../actions/providersActions';
import ProvidersForm from './providersForm';
import * as Paths from '../paths';

class AddProvider extends Component {
	componentDidMount () {
		if (this.props.match.params.name) {
			this.props.LoadProviders(this.props.match.params.name)
		}
		else if (!this.props.name) {
			this.props.newForm();
		}
	}

createNewProvider = () => ({
	name: this.props.name,
	category: this.props.category,
	address: this.props.address,
	phone: this.props.phone,
	rfc: this.props.rfc,
	products: [
        {
        _id: this.props._id,
        brand: this.props.brand,
        price: this.props.price,
        stock: this.props.stock,
        guarantee: this.props.guarantee
        }
    	]
	});

showSaveButton = () => (
	<div className="row">
      <Button className="col s6 offset-m2 m4" waves='light'
              disabled={ !this.formValidation() }
              onClick={ this.clickSave }>
        Save
      </Button>
    </div>
    );

showPreloader = () => (
    <div className="center-align">
      <Preloader/>
    </div>
  );

showSaveButton = () => (
  <div className="row">
      <Button className="col s6 offset-m2 m4" waves='light'
              //disabled={ !this.formValidation() }
              onClick={ this.clickSave }>
        Guardar
      </Button>
      <Button className="col s6 m4 red" waves='light'
              onClick={ () => this.props.redirect(true) }>
        Cancelar
      </Button>
    </div>
  );

clickSave = () => {
  const providerInfo = this.createNewProvider();
  const idProvider = this.props.match.params.name;
  idProvider ? this.props.LoadProviders(idProvider, providerInfo) : this.props.AddProviders(providerInfo);
  };

formValidation = () => 
    this.props.name && this.props.category && this.props.address && this.props.address && this.props.phone && this.props.phone && this.props.rfc;

render() {
  return this.props.redirect ? 
  ( <Redirect to= {Paths.ADD_PROVIDERS} />) :
  (<div>
    <ProvidersForm/>
    { this.props.name ? this.showPreloader() : this.showSaveButton() }
    </div>);
  }
}

const mapStateToProps = ({ providersReducer }) => ProvidersReducer;

export default connect(mapStateToProps, ProvidersAction)(AddProvider);

    






