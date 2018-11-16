import React, {Component} from 'react';
import {Button, Icon, SideNav, SideNavItem} from "react-materialize";

class SideNavCart extends Component {
    render() {
        return (
            <SideNav
                trigger={<Button className="btn-floating btn-large blue lighten-1">
                    <Icon>add_shopping_cart</Icon>
                </Button>}
                options={{
                    closeOnClick: true,
                    edge: "right"
                }}
            >
                <SideNavItem userView
                             user={{
                                 background: 'img/office.jpg',
                                 image: 'img/yuna.jpg',
                                 name: 'John Doe',
                                 email: 'jdandturk@gmail.com'
                             }}
                />
                <SideNavItem href='#!icon' icon='cloud'>First Link With Icon</SideNavItem>
                <SideNavItem href='#!second'>Second Link</SideNavItem>
                <SideNavItem divider />
                <SideNavItem subheader>Subheader</SideNavItem>
                <SideNavItem waves href='#!third'>Third Link With Waves</SideNavItem>
            </SideNav>
        );
    }
}

export default SideNavCart;