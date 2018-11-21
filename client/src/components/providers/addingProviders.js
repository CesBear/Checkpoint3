import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Preloader } from 'react-materialize';
import { Redirect } from 'react-router-dom';
import * as ProvidersActions from '../../actions/providersActions';
import ProvidersForm from './providersForm';
import * as Paths from '../../path';

class AddingProviders extends Component {
	componentDidMount() {
		if( this.props.match.params.name ) {
			this.props.getOneProvider(this.props.match.params.name )
		}
		else if( !this.props.name ){
			this.props.clearForm();
		}
	}

		createNewProvider = () => ({
			name: this.props.providers.name,
			address: this.props.providers.address,
			phone: this.props.providers.phone,
			rfc: this.props.providers.rfc,
			category: this.props.providers.category
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
    this.props.providers.name && this.props.providers.address && this.props.providers.phone && this.props.providers.rfc;

    	clickSave = () => {
    		const name = this.props.providers.name;
    		const address = this.props.providers.address;
    		const phone = this.props.providers.address;
    		const rfc = this.props.providers.rfc;
    	};

  render () {
  	return this.props.redirect ? ( <Redirect to={Paths.DISPLAY_PROVIDERS} />) : 
  	( <div> 
  		<ProvidersForm />
  		{ this.props.providers.loading ? this.showPreloader() : this.showSaveBotton() }
  		</div>);
  }
	
}

const mapStateToProps = ({ ProvidersReducers }) => ProvidersReducers;
export default connect (mapStateToProps, ProvidersActions)(AddingProviders);