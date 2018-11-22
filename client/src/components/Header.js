import React from 'react';
import { Link } from 'react-router-dom';
import {Navbar, Icon} from 'react-materialize';
import SideNavCart from "./Shopping/SideNavCart";

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
                    <Link to="/artist">
                        Artist
                    </Link>
                </li>
                <li>
                    <Link to="/shopping">
                    Buy Music!
                    </Link>
                </li>
                <li>
                    <SideNavCart/>
                </li>
            </Navbar>
        </div>
    );

export default Header;