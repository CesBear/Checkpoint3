import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as ProvidersActions from '../actions/providersActions';
import * as Paths from '../paths';
import MessageErr from '../components/messageErr';




class Providers extends Component {
	componentDidMount() {
		console.log(this.props);
		if (!this.props.LoadProviders());
			console.log(this.props.showErr);
			
		}
showProvider = () => (
	<div>
		{ this.FormValidation()}
	</div>
	);

localShowErr = () => (
	<MessageErr TitleErr={'Unable to load Providers'}
				 menssageErr={this.props.er.message}
				 action={this.props.clearFail}/>
	);



FormValidation = () => (
    this.props.name || this.props.category || this.props.address || this.props.phone || this.props.rfc || this.props.products
    );
};

render() {
	return (
		<div>
			<div className= 'valign-wrapper' >
				<h1>Providers</h1>
				<link to= {paths.ADD_PROVIDERS}>
					<Button floating large className='red lighten-1' waves='light' icon='add' />
				</link>
			</div>
			{
				this.props.name ? 
				 (<div className='center-align'><Preloader/></div>) :
				 (this.props.err ? this.localShowErr() : this.showProvider())
			}
		</div>
		);
};

const mapStateToProps = ({ providersReducer }) => providersReducer;
export default connect(mapStateToProps, ProvidersActions)(Providers);