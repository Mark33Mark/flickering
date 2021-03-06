
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
      <Navbar bg="dark" variant="dark" expand="md" >
        <Container fluid style={{width:"600px"}}>
          <Link to= "/" onClick={ refreshPage }>
            <img
                alt=""
                src="./logo192.png"
                width="90"
                height="auto"
                style={{marginLeft:"0", paddingRight:"1rem"}}
                className="align-top pr-3"
            />
          </ Link>      
          <Navbar.Toggle aria-controls="responsive-navbar-nav"  />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-0 mb-2 mb-lg-0" >

                {/* if user is logged in show different menu options */}
                {Auth.loggedIn() 
                ? ( 
                    <>

                      <Nav.Link style={{cursor: "pointer", textAlign: "right"}} as={Link} to="/questions">
                        Questions<span style={{ paddingLeft:"1rem"}}>|</span>
                      </Nav.Link>
                      <Nav.Link style={{cursor: "pointer", textAlign: "right"}} as={Link} to="/today">
                        Today<span style={{ paddingLeft:"1rem"}}>|</span>
                      </Nav.Link>
                      <Nav.Link style={{cursor: "pointer", textAlign: "right"}} as={Link} to="/notes">
                        Notes<span style={{ paddingLeft:"1rem"}}>|</span>
                      </Nav.Link>
                      <Nav.Link style={{cursor: "pointer", textAlign: "right"}} as={Link} to="/advisor">
                        Advisor<span style={{ paddingLeft:"1rem"}}>|</span>
                      </Nav.Link>
                      <Nav.Link style={{cursor: "pointer", textAlign: "right"}} as={Link} to="/about">
                        About<span style={{ paddingLeft:"1rem"}}>|</span>
                      </Nav.Link>
                      <Nav.Link style={{cursor: "pointer", textAlign: "right"}} onClick={Auth.logout}>
                        Logout<span style={{ paddingLeft:"1rem"}}>|</span>
                      </Nav.Link>

                      
                    </>  
                  ) 
                : ( 
                  <div >
                    <Nav.Link style={{display:"inline", color:"white", cursor: "pointer" }} as={Link} to="/login">
                      login
                    </Nav.Link> / 
                    <Nav.Link style={{display:"inline", color:"white", cursor: "pointer"}} as={Link} to="/signup">
                      signup
                    </Nav.Link>
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
