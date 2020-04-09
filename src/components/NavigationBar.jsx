import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


function NavigationBar() {
    return (
       <Navbar bg="dark" variant="dark" sticky="top">
       <img
            src = "images/brand-logo.png"
            className="d-inline-block align-top brand-logo"
            alt="WCS logo"
        />
       <Navbar.Brand className="navbar-brand ml-2 font-weight-bold" href="#home"> WSC Basketball work league</Navbar.Brand>
       <div className="container-fluied">
            <Nav>
                <Nav.Link className="nav-item nav-link pl-5" href="#players">
                    <i className="fas fa-user"></i>
                    {' '}Players <span className="sr-only"></span>
                </Nav.Link>
                <Nav.Link className="nav-item nav-link pl-5" href="#games">
                    <i className="fas fa-basketball-ball" aria-hidden="true"></i>  
                    {' '}Games
                </Nav.Link>
                <Nav.Link className="nav-item nav-link pl-5" href="#stats">
                    <i className="far fa-chart-bar"></i>
                    {' '}Stats    
                </Nav.Link>
                <Nav.Link className="nav-item nav-link pl-5" href="#leaders">
                    <i className="fas fa-medal"></i>
                    {' '}Leaders    
                </Nav.Link>
            </Nav>
        </div>
        </Navbar>  
    )
}

export default NavigationBar;


