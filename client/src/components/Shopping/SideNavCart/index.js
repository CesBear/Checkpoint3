import React, {Component} from 'react';
import {Button, Icon, SideNav, SideNavItem} from "react-materialize";
import Contador from "./Contador";

class SideNavCart extends Component {
    render() {
        return (
            <SideNav
                trigger={<Button className="btn-floating btn-large blue lighten-1">
                    <Icon>add_shopping_cart</Icon>
                </Button>}
                options={{
                    edge: "right"
                }}
            >
                <SideNavItem icon='add_shopping_cart'>List of Products</SideNavItem>
                <SideNavItem divider />
                <SideNavItem>Product 1:     <Contador/> </SideNavItem>
                <SideNavItem>Second Link</SideNavItem>
                <SideNavItem>Second Link</SideNavItem>
                <SideNavItem>Second Link</SideNavItem>
                <SideNavItem>Second Link</SideNavItem>


            </SideNav>
        );
    }
}

export default SideNavCart;