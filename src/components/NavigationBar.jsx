import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Link} from "react-router-dom";


function NavigationBar() {
    return (
       <Navbar bg="dark" variant="dark" sticky="top">
            <img
                src = "images/brand-logo.png"
                className="d-inline-block align-top brand-logo"
                alt="WCS logo"
            />
            <Link className="navbar-brand ml-2 font-weight-bold" to ="/" >WSC Basketball work league</Link>    
            <div className="container-fluied">
                <Nav>
                <Link className="nav-item nav-link pl-3" to="/games">
                        <i className="fas fa-basketball-ball" aria-hidden="true"></i>  
                        {' '}Games
                    </Link>
                    <Link className="nav-item nav-link pl-5" to="/players">
                        <i className="fas fa-user"></i>
                        {' '}Players <span className="sr-only"></span>
                    </Link>
                    <Link className="nav-item nav-link pl-5" to="/stats">
                        <i className="far fa-chart-bar"></i>
                        {' '}Stats    
                    </Link>
                    <Link className="nav-item nav-link pl-5" to="/leaders">
                        <i className="fas fa-medal"></i>
                        {' '}Leaders    
                    </Link>
                </Nav>
            </div>
        </Navbar>  
    )
}

export default NavigationBar;


