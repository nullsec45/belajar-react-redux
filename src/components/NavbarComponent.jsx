import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
    Container
} from 'reactstrap';

function NavbarComponent(args) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="dark" dark expand="md">
                <Container>
                    <Collapse isOpen={isOpen} navbar>
                        <NavbarBrand href="/">reactstrap</NavbarBrand>
                        <NavbarToggler onClick={toggle} />
                        <Nav className="me-auto" navbar>
                            <NavItem>
                                <NavLink href="/components/">Components</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">
                                    Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">
                                    About Us
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <NavbarText>Admin</NavbarText>
                    </Collapse>
                </Container>
            </Navbar>
        </div >
    );
}

export default NavbarComponent;