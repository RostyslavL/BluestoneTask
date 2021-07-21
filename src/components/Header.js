import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

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
                    <LinkContainer to='/'>
                        <Navbar.Brand>Web App For BlueStone</Navbar.Brand>
                    </LinkContainer>    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                        <LinkContainer to='/cart'>
                            <Nav.Link> 
                                <i className="fas fa-shopping-cart"></i> Cart 
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/login'>
                            <Nav.Link>
                                <i className="fas fa-user"></i> Sign In 
                            </Nav.Link>
                        </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
