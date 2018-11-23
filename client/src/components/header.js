import React from 'react';
import { Navbar } from 'react-materialize';
import { Link } from 'react-router-dom';

const Header = (props) => (
	<Navbar left>
		<li>
			<Link to= '/'>
				Home
			</Link>
		</li>
		<li>
			<Link to= '/artist'>
				Artist List
			</Link>
		</li>
		<li>
			<Link to= '/AddArtist'>
				Add Artist
			</Link>
		</li>
	</Navbar>
);


export default Header;

