import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Navbar, Collapse, Nav, NavItem, NavLink } from 'reactstrap';

class DryerHeaderComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            something: 'this is a something from the state...'
        };
    }

    render() {
        return (
            <div>
                <Navbar color="faded" light expand="md">
                    <Collapse navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink href="/program">Vizualizare Programare</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/editing">Editare Apartamente</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default connect()(DryerHeaderComponent);
