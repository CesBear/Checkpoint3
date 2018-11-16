import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Preloader } from 'react-materialize';
import { Redirect } from 'react-router-dom';
import providersReducer from '../reducers/providersReducer';
import * as ProvidersAction from '../actions/providersActions';
import ProvidersForm from './ProvidersForm';

class AddProvider extends Component {
	componentDidMount () {
		if (this.porps.match.params.name) {
			this.props.LoadProviders(this.props.match.params.name)
		}
		else if (!this.props.name) {
			this.porps.newForm();
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
              disabled={ !this.FormValidation() }
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
              disabled={ !this.FormValidation() }
              onClick={ this.clickGuardar }>
        Guardar
      </Button>
      <Button className="col s6 m4 red" waves='light'
              onClick={ () => this.props.activarRedireccionAInicio(true) }>
        Cancelar
      </Button>
    </div>
  );

clickSave = () => {
  const { name,
          category,
          address,
          phone,
          rfc
        } = this.props;

  const providerInfo = { name, category, address, phone, rfc };
  this.props.addprovider(providerInfo, this.props.providers);
  };

render() {
  return this.props.providerInfo;
  (<div>
    <providersForm/>
    { this.props.name ? this.props.createNewProvider() : this.props.showSaveButton() }
    </div>);
  }

}

const mapStateToProps = ({ providersReducer }) => ProvidersReducer;

export default connect(mapStateToProps, ProvidersAction)(AddProvider);

    






