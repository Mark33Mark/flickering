
import React                      from "react";
import { Link }                   from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

import Auth                       from "../utils/auth";

const AppNavbar = () => {

  const refreshPage = () =>  { 
    window.location.href = window.location.origin +  "/";
  }; 

  return ( 
    <>
      <Navbar bg="dark" variant="dark" expand="lg" >
        <Container fluid style={{maxWidth:"500px"}}>
          <Link to= "/" onClick={ refreshPage }>
            <img
                alt=""
                src="./images/logo192.png"
                width="100"
                height="auto"
                className="d-inline-block align-top pr-3"
            />
          </ Link>      
          <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">

                {/* if user is logged in show different menu options */}
                {Auth.loggedIn() 
                ? ( 
                    <>
                      <Nav.Link style={{cursor: "pointer"}} as={Link} to="/questions">
                        Questions
                      </Nav.Link>
                      <Nav.Link style={{cursor: "pointer"}} as={Link} to="/advisor">
                        Advisor
                      </Nav.Link>
                      <Nav.Link style={{cursor: "pointer"}} onClick={Auth.logout}>Logout</Nav.Link>
                      
                    </>  
                  ) 
                : ( 
                  <div >
                    <Nav.Link style={{display:"inline", color:"white", cursor: "pointer" }} as={Link} to="/login">login</Nav.Link> / 
                    <Nav.Link style={{display:"inline", color:"white", cursor: "pointer"}} as={Link} to="/signup">signup</Nav.Link>
                  </div>
                  )}

            </Nav>
          </Navbar.Collapse>
          
        </Container>
      </Navbar>
    </>
  );
};

export default AppNavbar;
