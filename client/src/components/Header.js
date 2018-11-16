import React from 'react';
import { Link } from 'react-router-dom';
import {Navbar, Icon} from 'react-materialize';
import SideNavCart from "./SideNavCart";

const Header = (props) =>
    (
        <div>
            <Navbar right>
                <li>
                    <Link to="/">
                        <Icon>home</Icon>
                    </Link>
                </li>
                <li>
                    <Link to="/providers">
                        Providers
                    </Link>
                </li>
                <li>
                    <Link to="/orders">
                        Orders
                    </Link>
                </li>
                <li>
                    <SideNavCart/>
                </li>
            </Navbar>
        </div>
    );

export default Header;