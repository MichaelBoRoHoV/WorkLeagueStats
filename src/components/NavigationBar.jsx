import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


function NavigationBar() {
    return <header>
    <Navbar bg="dark" variant="dark" fixed="top">
       <img
            src = "images/brand-logo.png"
            className="d-inline-block align-top brand-logo"
            alt="WCS logo"
        />
       <Navbar.Brand className="navbar-brand ml-2 font-weight-bold" href="#home"> WSC West</Navbar.Brand>
            <Nav className="mr-auto">
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
    </Navbar>  
    </header>
}

export default NavigationBar;






// <header>
//     <navbar className="navbar navbar-expand-lg navbar-dark bg-dark py-2">
//        <img src = "images/brand-logo.png" className="d-inline-block align-top brand-logo" alt=""></img>
//        <a className="navbar-brand ml-2 font-weight-bold" href="/"> WSC West</a>
//        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//         </button>
//           <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//             <div className="navbar-nav">
//                 <a className="nav-item nav-link pl-3" href="#">
//                     <i className="fas fa-user"></i>
//                    {' '}Players<span className="sr-only"></span></a>
//                 <a className="nav-item nav-link pl-5" href="#">
//                     <i className="fas fa-basketball-ball" aria-hidden="true"></i>  
//                    {' '}Games
//                 </a>
//                 <a className="nav-item nav-link pl-5" href="#">
//                     <i className="far fa-chart-bar"></i>
//                    {' '}Stats    
//                 </a>
//                 <a className="nav-item nav-link pl-5" href="#">
//                     <i className="fas fa-medal"></i>
//                    {' '}Leaders    
//                 </a>
//             </div>
//         </div>
//     </navbar>  
//     </header>