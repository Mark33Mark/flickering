
import React, { useState }      from "react";
import { Form, Button, Alert }  from "react-bootstrap";
import { useMutation }          from "@apollo/client";
import { Link }       from "react-router-dom";
import { Nav }                  from "react-bootstrap";

import { LOGIN_USER }           from "../utils/mutations";
import Auth                     from "../utils/auth";

const LoginForm = ( props ) => {

  const [ userFormData, setUserFormData ] = useState( { email: "", password: "" } );
  const [ validated ] = useState( false );
  const [ showAlert, setShowAlert ] = useState( false );

  
  const [ login ] = useMutation( LOGIN_USER );


  const handleInputChange = ( event ) => {
    const { name, value } = event.target;
    setUserFormData( { ...userFormData, [ name ]: value } );
  };


  const handleFormSubmit = async ( event ) => {
    event.preventDefault();

    // check if form has everything ( as per react-bootstrap docs )
    const form = event.currentTarget;
      if ( form.checkValidity() === false ) {
        event.preventDefault();
        event.stopPropagation();
      }

    try {
      const { data } = await login({
        variables: { ...userFormData },        
      });
      
      Auth.login(  data.login.token  );
      window.location.href= window.location.origin +  "/questions";

    } catch ( e ) {
      console.error( e );
      setShowAlert( true );
    }

    setUserFormData({
      email: "",
      password: "",
    });

  };




  return ( 
          <>
            <div style={{backgroundColor:"black", height:"100vh", color: "white", maxWidth:"400px", margin: "0 auto"}}> 
              <Nav.Link as={Link} to="/">
                <img
                    alt=""
                    src="./logo512.png"
                    width="100%"
                    height="auto"
                    style={{position:"relative"}}
                />
              </Nav.Link>
              <p style={{position: "absolute", marginTop:"-6rem", paddingLeft:"2rem", width:"350px"}}>  / ˈflIk.ər. Iŋ / <br />
                  adjective: appearing for a short time before disappearing again.
              </p>
              <div style={{border:"0.25rem solid white", borderRadius:"0.5rem", height:"380px", margin:"1rem", position:"relative"}}> 
                <p style={{textAlign:"center", fontSize:"2rem"}}> Login</p>

                <div className="login-form"> 

                  <Form noValidate validated = {validated} onSubmit={handleFormSubmit}>
                    <Alert dismissible onClose = {() => setShowAlert( false )} show={showAlert} variant="danger">
                      Sorry I can't log you in, please check your login details and try again.
                    </Alert>

                    <Form.Group>
                      <Form.Label htmlFor="email">Email</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="...your email"
                        name="email"
                        onChange={handleInputChange}
                        value={userFormData.email}
                        required
                      />
                      <Form.Control.Feedback type="invalid">Email is required!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group>
                      <Form.Label htmlFor="password">Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="...your password"
                        name="password"
                        onChange={handleInputChange}
                        value={userFormData.password}
                        required
                      />
                      <Form.Control.Feedback type="invalid">Password is required!</Form.Control.Feedback>
                    </Form.Group>

                    <Button
                      disabled={!( userFormData.email && userFormData.password )}
                      type="submit"
                      variant="success"
                      style={{width:"100%", marginTop:"1rem"}}
                      >
                      Submit
                    </Button>
                  </Form>
                </div>
                <div style={{textAlign: "center", marginTop:"1rem"}}>
                  <Nav.Link style={{display:"inline", color:"white"}} as={Link} to="/signup">signup instead?</Nav.Link>
                </div>
              </div>
            </div>
          </>
  );
  
};

export default LoginForm;
