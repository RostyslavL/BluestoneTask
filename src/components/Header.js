import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'

const Header = () => {
    return (
        <header>
            <Navbar 
                bg="dark" 
                variant="dark" 
                expand="lg" 
                collapseOnSelect>
                <img
                    src="/img/nav_logo.png"
                    width="40"
                    height="40"
                    className="d-inline-block align-top "
                    alt="nav-logo"
                    />
                <Container>
                    <Navbar.Brand href="/home">Web App For BlueStone</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link> 
                                <i className="fas fa-shopping-cart"></i> Cart 
                            </Nav.Link>
                            <Nav.Link>
                                <i className="fas fa-user"></i> Sign In 
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
