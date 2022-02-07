
import React, { useState }      from "react";
import { Form, Button, Alert }  from "react-bootstrap";
import { Link }                 from "react-router-dom";
import { Nav }                  from "react-bootstrap";

import { useMutation }          from "@apollo/client";
import { ADD_USER }             from "../utils/mutations";
import Banner                   from "../components/Banner";

import Auth from "../utils/auth";

const SignupForm = () => {

  // set initial form state
  const [ userFormData, setUserFormData ] = useState( { username: "", email: "", password: "" } );

  // set state for form validation
  const [ validated ] = useState( false );

  // set state for alert
  const [ showAlert, setShowAlert ] = useState( false );

  const [ addUser ] = useMutation( ADD_USER );



  // update state based on form input changes
  const handleInputChange = ( event ) => {

    const { name, value } = event.target;
    setUserFormData( { ...userFormData, [name]: value } );
  };



  // submit form
  const handleFormSubmit = async ( event ) => {
    event.preventDefault();

    // check if form has everything ( as per react-bootstrap docs )
    const form = event.currentTarget;
    if ( form.checkValidity(  ) === false ) {
      event.preventDefault(  );
      event.stopPropagation(  );
    }

    try {
      const { data } = await addUser({ 
        variables: { ...userFormData },
      } );

      Auth.login(  data.addUser.token  );
      
      // using this method as <Redirect> was not working
      window.location.href= window.location.origin +  "/questions";

    } catch ( err ) {

      console.error( err );
      setShowAlert( true );
    }

    setUserFormData({
      username: "",
      email: "",
      password: "",
    } );
  };


  return ( 
    <>      
      <div style={{backgroundColor:"black", height:"100vh", color: "white", maxWidth:"400px", margin: "0 auto"}}> 

        <Banner />
        
        <div style={{border:"0.25rem solid white", borderRadius:"0.5rem", height:"420px", margin:"1rem", position:"relative"}}> 
          <p style={{textAlign:"center", fontSize:"2rem"}}> Signup</p>

          <div className="signup-form"> 

            <Form noValidate validated={validated} onSubmit={handleFormSubmit}>

              <Form.Group>
                <Form.Label htmlFor="username">Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="...your username"
                  name="username"
                  onChange={handleInputChange}
                  value={userFormData.username}
                  required
                />
                <Form.Control.Feedback type="invalid">Username is required!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor="email">Email</Form.Label>
                <Form.Control
                  type="email"
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
                disabled={!( userFormData.username && userFormData.email && userFormData.password )}
                style={{ cursor: "pointer", width:"100%", marginTop:"2rem" }}
                type="submit"
                variant="success"
                >
                Submit
              </Button>
              {/* show alert if server data is bad */}
              <Alert dismissible onClose={() => setShowAlert( false )} show={showAlert} variant="danger">
                Sorry, I am unable to sign you up.  Possibly your chosen email and / or username already exists. Please try again.
              </Alert>
            </Form>
          </div>

          <div style={{textAlign: "center", marginTop:"1rem"}}>
            <Nav.Link style={{display:"inline", color:"white"}} as={Link} to="/login">login instead?</Nav.Link>
          </div>

        </div>
      </div>
    </>
  );
};

export default SignupForm;
