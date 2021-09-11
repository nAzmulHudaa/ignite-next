import { Button } from '@material-ui/core';
import React, { useState ,useEffect} from 'react';
import { Navbar, NavDropdown, Nav, } from 'react-bootstrap'
import Image from 'next/Image'


// import image

import logo from '../../../../assets/images/ignite_youth_foundation_logo.png'




const NavigationBar = () => {
    const [show, handleShow] = useState(false);
    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        }
        else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener('scroll', transitionNavBar);
    }, [])

    return (
        <div className={`app-bar ${show && 'nav_black'}`} >
            <Navbar collapseOnSelect expand="lg"  >
                <Navbar.Brand style={{ width:show?'80px':'125px', height: show?'65px':'100px' }} className='logo' href="#home">
                    <Image
                        src={logo}
                        alt="logo"
                      
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" style={{marginTop:show?'15px':'40px',padding:'0px'}}>
                    <Nav className="ms-auto">
                        <Nav.Link style={{ color: '#000' }}>Home</Nav.Link>
                        <NavDropdown style={{ color: '#000' }} title="Programs" id="collasible-nav-dropdown">
                            <NavDropdown.Item >Inclusive Development</NavDropdown.Item>
                            <NavDropdown.Item >Youth Development</NavDropdown.Item>
                            <NavDropdown.Item >Livehood Program</NavDropdown.Item>

                        </NavDropdown>
                        <NavDropdown title="Projects" id="collasible-nav-dropdown">
                            <NavDropdown.Item >Shabolombi</NavDropdown.Item>
                            <NavDropdown.Item >Prerona</NavDropdown.Item>
                            <NavDropdown.Item >Nirman</NavDropdown.Item>
                            <NavDropdown.Item >Asroy</NavDropdown.Item>
                            <NavDropdown.Item>Tripty</NavDropdown.Item>
                            <NavDropdown.Item >Khabbar</NavDropdown.Item>

                        </NavDropdown>
                        <NavDropdown title="Ignite" id="collasible-nav-dropdown">
                            <NavDropdown.Item>Team Ignite</NavDropdown.Item>
                            <NavDropdown.Item>Ignite Globar</NavDropdown.Item>
                            <NavDropdown.Item>Carrear</NavDropdown.Item>
                            <NavDropdown.Item>FAQ</NavDropdown.Item>
                            <NavDropdown.Item>Events</NavDropdown.Item>
                            <NavDropdown.Item>Contact Us</NavDropdown.Item>

                        </NavDropdown>
                        <NavDropdown title="Updates" id="collasible-nav-dropdown">
                            <NavDropdown.Item >News</NavDropdown.Item>
                            <NavDropdown.Item >Blog</NavDropdown.Item>

                        </NavDropdown>
                        <Nav.Link
                            style={{ marginRight: '15px', color: '#000' }}
                        >Donate</Nav.Link>
                        <Button
                            variant='contained'
                            color='secondary'
                        >
                            Sponsor A Child
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavigationBar;