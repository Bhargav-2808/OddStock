import './Header.css';
import React from 'react';
import { Navbar,Nav,Container , Image} from 'react-bootstrap';
import logo from '../../images/logo.png'
//import LockIcon from '@material-ui/icons/Lock';
//import LockOpenIcon from '@material-ui/icons/LockOpen';

export default function Header(porps) {
    return (
            <Navbar collapseOnSelect expand="lg" bg="light" className="top-fixed">
                <Container fluid>
                <Navbar.Brand href="#home"><Image  className="img" src={logo}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="justify-content-md-end text-center me-auto w-100">
                        <Nav.Link href="#home" className="px-lg-4">Home</Nav.Link>
                        <Nav.Link href="#search" className="px-lg-4">Search</Nav.Link>
                        <Nav.Link href="#news" className="px-lg-4">News</Nav.Link>
                        <Nav.Link href="#premium" style={{color:"#782df3",fontWeight: "600"}} className="px-lg-4">Premium</Nav.Link>
                        {
                            porps.login?
                            <Nav.Link href="#pricing" style={{backgroundColor:"#E1EFFF",borderRadius: "0.5rem",fontWeight: "500"}} className="px-lg-4">{porps.accountHolder}</Nav.Link>:
                            <Nav.Link href="#account" className="px-lg-4"> Account</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
    )
}
