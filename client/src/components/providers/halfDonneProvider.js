import React from 'react';
import { Icon, Row, Col } from 'react-materialize';
import { connect } from 'react-redux';
import * as ProvidersActions from '../../actions/providersActions';

const HalfDonneProvider = (props) => (
	<Row>
		<Col s={8} m={8} className='offset-s2 offset-m2 center-align'>
			<Icon large className='amber-text'>Warning</Icon>
		</Col>
		<Col s={8} m={6}>
			<h5>Provider Unfinished</h5>
			<ul>
       			 { props.providers.name ? (<li>Name: <b>{props.providers.name}</b></li>) : '' }
       			 { props.providers.address ? (<li>Address: <b>{props.providers.address}</b></li>) : '' }
        		 { props.providers.phone ? (<li>Phone: <b>{props.providers.phone}</b></li>) : '' }
       			 { props.providers.category ? (<li>Category: <b>{props.providers.category}</b></li>) : '' }
			</ul>
		</Col>
	</Row>
	);

const mapStateToProps = ({ ProvidersReducers }) => ProvidersReducers;
export default connect(mapStateToProps, ProvidersActions) (HalfDonneProvider);