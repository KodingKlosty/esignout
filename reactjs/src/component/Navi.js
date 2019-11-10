import React, { Component } from 'react';
import {Navbar,Nav,NavLink,NavItem} from 'reactstrap';


class Navi extends Component {
    render() {
        return(
                <Navbar>
                    <Nav >
                        <NavItem>
                            <NavLink href='/'>Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='/signin'>Sign In</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            )
    }
}

export default Navi;