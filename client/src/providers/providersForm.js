import React from 'react';
import { connect } from 'react-redux';
import * as ProvidersActions from '../actions/providersActions';


const ProvidersForm = (props) => {

	const addName = (event) => props.addName(event.target.value);

	const addCategory = (event) => props.addCategory(event.target.value);

	const addRfc = (event) => props.addRfc(event.target.value);

	const addAddress = (event) => props.addAddress(event.target.value);

	const addPhone = (event) => props.addPhone(event.target.value);


	return (
		<div className='row'>
		<Input s={12} m={6} label="Name" type='text' placeholder=' '
             onChange={addName} value={props.name} />
        <Input s={12} m={6} label="Phone" type='text' placeholder=' '
             onChange={addPhone} value={props.phone} />
        <Input s={12} m={6} label="Address" type='text' placeholder=' '
             onChange={addAddress} value={props.address} />
        <Input s={12} m={6} label="RFC" type='text' placeholder=' '
             onChange={addRfc} value={props.rfc} />
        <Input s={12} m={6} label="Category" type='text' placeholder=' '
             onChange={addCategory} value={props.category} />
		</div>
		);
};

const mapStateToProps = ({ providersReducer }) => providersReducer;
export default connect(mapStateToProps, ProvidersActions) (ProvidersForm);