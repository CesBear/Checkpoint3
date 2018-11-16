import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Icon } from 'react-materialize';
import * as Paths from '../paths';
import Providers from '../providers';

const Header = () => (
		<div>
			<Navbar className= 'red lighten-1' right>
      			<li><Link to={Paths.PROVIDERS}><Icon>account_circle</Icon></Link></li>
      			<li><Link to={Paths.ADD_PROVIDERS}><Icon>person_add</Icon></Link></li>
    		</Navbar>
		</div>
	);

export default Header;


