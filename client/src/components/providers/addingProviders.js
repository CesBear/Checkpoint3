import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Preloader } from 'react-materialize';
import { Redirect } from 'react-router-dom';
import * as ProvidersActions from '../../actions/providersActions';
import ProvidersForm from './providersForm';
import * as Paths from '../../path';

class AddingProviders extends Component {
	componentDidMount() {
		if( this.props.match.params.id ) {
			this.props.getOneProvider(this.props.match.params.id )
		}
		else if( !this.props.id_provider ){
			this.props.clearForm();
		}
	}

		createNewProvider = () => ({
			name: this.props.name,
			address: this.props.address,
			phone: this.props.phone,
			rfc: this.props.rfc,
			category: this.props.category,
		});

		showSaveBotton = () => (
			<div className="row">
		      <Button className="col s6 offset-m2 m4" waves='light'
		              disabled={ !this.validForm() }
		              onClick={ this.clickSave }>
		        Save
		      </Button>
		      <Button className="col s6 m4 red" waves='light'
		              onClick={ () => this.props.redirectActive(true) }>
		        Cancel
		      </Button>
		    </div>
			);

		showPreloader = () => (
		 <div className="center-align">
		      <Preloader/>
		    </div>
		  );

		validForm = () =>
    		this.props.name && this.props.address && this.props.phone && this.props.rfc && this.props.category && this.props.products;

    	clickSave = () => {
    		const providerData = this.createNewProvider();
    		console.log(providerData);
    		const idProvider = this.props.match.params.id;
    		idProvider ? this.props.modifyProvider(idProvider, providerData) : this.props.addProviders(providerData)
    	};

  render () {
  	return this.props.redirect ? ( <Redirect to={Paths.DISPLAY_PROVIDERS} />) : 
  	( <div> 
  		<ProvidersForm />
  		{ this.props.loading ? this.showPreloader() : this.showSaveBotton() }
  		</div>);
  }
	
}

const mapStateToProps = ({ ProvidersReducers }) => ProvidersReducers;
export default connect (mapStateToProps, ProvidersActions)(AddingProviders);