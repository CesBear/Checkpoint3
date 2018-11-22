import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Table, Icon, Button, Preloader, Modal } from 'react-materialize';
import * as ProvidersActions from '../../actions/providersActions';
import MessageErr from '../messageErr';
import * as Paths from '../../path';
import HalfDonneProvider from './halfDonneProvider';



class Providers extends Component {
  componentDidMount() {
    //console.log(this.props);
    if(!this.props.providersConsult){
      this.props.bringProviders();
    }
  }
  

  Err = () => (
    <MessageErr titleErr={'Something happened. Try again.'}
                  messageErr={this.props.err.message}
                  accion={this.props.clearErr}/>
  );

  noProvidersMessage = () => (
    <div className="center-align">
      <Icon large className="grey-text text-lighten-2">person_outline</Icon>
      <h4>No  Artist.</h4>
      <p>Please <Link to={Paths.ADD_PROVIDERS}>add a new Artist</Link> right now.</p>
    </div>
  );

  showProviders = () => (
    <Table>
      <thead>
      <tr>
        <th className="hide-on-med-and-up">Name</th>
        <th className="hide-on-small-only">Address</th>
        <th className="hide-on-small-only">Phone</th>
        <th className="hide-on-small-only">RFC</th>
        <th className="hide-on-small-only">Category</th>
      </tr>
      </thead>
      <tbody>
      { this.props.providers.map((provider) => (
          <tr key={provider._id}>
            <td className="hide-on-med-and-up">{this.getProvidersName(provider)}</td>
            <td className="hide-on-small-only">{provider.name}</td>
            <td className="hide-on-small-only">{provider.address}</td>
            <td className="hide-on-small-only">{provider.phone}</td>
            <td className="hide-on-small-only">{provider.category}</td>
            <td>
            <Link to={`${Paths.DISPLAY_PROVIDERS}`}><Icon>visibility</Icon>
            </Link>
            </td>
            <td>
              <Modal header="Delete Provider"
                     actions={
                      <div>
                        <Button className="red modal-close"
                                onClick={() => this.props.deleteProvider(provider.name)}>
                          Ok
                        </Button>
                        <Button className="green modal-close">No</Button>
                      </div> }
                     trigger={<Link to="/"><Icon>delete_forever</Icon></Link>}>
                <p>Wish to DELETE {provider.name}?</p>
              </Modal>
            </td>
          </tr> ))
      }
      </tbody>
    </Table>
  );

  showProvidersList = () => (
    <div>
      { this.validateForm() ? <HalfDonneProvider /> : '' }
      { this.props.providers.length ? this.showProviders() : this.noProvidersMessage() }
    </div>
  );

  validateForm = () =>
    this.props.providers.name || this.props.providers.address || this.props.providers.phone || this.props.providers.rfc || this.props.providers.category ;

  getProvidersName = (provider) =>
    `${provider.name} ${provider.address} ${provider.phone} ${provider.rfc}`;

  render() {
    //this.props.redirectActive(false);
    return (
      <div>
        <div className='valign-wrapper'  >
          <h1>Artist</h1>
          <Link to={Paths.ADD_PROVIDERS}>
            <Button floating large className='red lighten-1' waves='light' icon='add' />
          </Link>
        </div>
        {
          this.props.loading ?
            (<div className="center-align"><Preloader/></div>) :
            (this.props.err ? this.Err() : this.showProvidersList())
        }
      </div>
    );
  };
}

const mapStateToProps = ({ ProvidersReducers }) => ProvidersReducers;

export default connect(mapStateToProps, ProvidersActions)(Providers);
