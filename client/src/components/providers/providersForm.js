import React from 'react';
import { Input } from 'react-materialize';
import { connect } from 'react-redux';
import * as ProvidersActions from '../../actions/providersActions';


const ProvidersForm = (props) => {

  const addName = (event) => props.AddName(event.target.value);
  const addAddress = (event) => props.AddAddress(event.target.value);
  const addPhone = (event) => props.AddPhone(event.target.value);
  const addRFC = (event) => props.AddRFC(event.target.value);
  const addCategory = (event) => props.AddCategory(event.target.value);
  const addProducts = (event) => props.AddProducts(event.target.value);
  

  return (
    <div className="row">
      <Input s={12} m={6} label="Name" type='text' placeholder=''
             onChange={ addName } value={ props.name } />
      <Input s={12} m={6} label="Address" type='text' placeholder=''
             onChange={ addAddress } value={ props.address } />
      <Input s={12} m={6} label="Phone" type='text' placeholder=''
             onChange={ addPhone } value={ props.phone } />
      <Input s={12} m={6} label="RFC" type='text' placeholder=''
             onChange={ addRFC } value={ props.rfc } />
      <Input s={12} m={6} label="Category" type='text' placeholder=''
             onChange={ addCategory } value={ props.category } />
    </div>
  );
};

const mapStateToProps = ({ ProvidersReducers }) => ProvidersReducers;

export default connect(mapStateToProps, ProvidersActions)(ProvidersForm);