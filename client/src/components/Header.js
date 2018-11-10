import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Icon } from 'react-materialize';

const Header = (props) =>
(
	<div>
		<Navbar left>
			<li>
				<Link to="/">
					<Icon>home</Icon>
				</Link>
			</li>
			<li>
				<Link to="/airlines">
					Airlines
				</Link>
			</li>
			<li>
				<Link to="/usuarios">
					Flights
				</Link>
			</li>
			<li>
				<Link to="/usuarios">
					Passengers
				</Link>
			</li>
		</Navbar>
	</div>
);

export default Header;