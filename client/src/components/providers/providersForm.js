import React from 'react';
import { Input } from 'react-materialize';
import { connect } from 'react-redux';
import * as ProvidersActions from '../../actions/providersActions';
import AddProviders from './addingProviders';

const ProvidersForm = (props) => {

  return (
    <div className="row">
      <Input s={12} m={6} label="Name" type='text' placeholder=' '
             onChange={ AddProviders } value={ props.providers.name } />
      <Input s={12} m={6} label="Address" type='text' placeholder=' '
             onChange={ AddProviders } value={ props.providers.address } />
      <Input s={12} m={6} label="Phone" type='number' placeholder=' '
             onChange={ AddProviders } value={ props.providers.phone } />
      <Input s={12} m={6} label="RFC" type='text' placeholder=' '
             onChange={ AddProviders } value={ props.providers.rfc } />
    </div>
  );
};

const mapStateToProps = ({ ProvidersReducers }) => ProvidersReducers;

export default connect(mapStateToProps, ProvidersActions) (ProvidersForm);