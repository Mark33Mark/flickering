import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

import { useParams }                    from 'react-router-dom';
import { useQuery }                     from '@apollo/client';
import { QUERY_USER, GET_ME }           from '../utils/queries';
import Auth                             from "../utils/auth";

const Landing = () => {

// =====================================================================

const { username: userParam } = useParams();
const { loading, data } = useQuery(userParam ? QUERY_USER : GET_ME, {
    variables: { username: userParam },
});

const user = data?.me || data?.user || {};
    
if (loading) {
    return ( <div>Loading... </div> );
}

const anyoneLoggedIn = !user?.username ? "Hi Visitor": `Welcome ${user.username}`;


// =====================================================================

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
                
                <div style={{border:"0.25rem solid white", borderRadius:"0.5rem", height:"300px", margin:"1rem", position:"relative"}}> 
                    <p style={{textAlign:"center", fontSize:"2rem", padding:"0.25rem 1rem"}}> {anyoneLoggedIn}</p>
                    <p style={{textAlign:"center", fontSize:"1rem", padding:"0.25rem 1rem"}}> 
                        Our moods fluctuate / flicker.  <br />
                        This is a space to track your emotions  to identify and help manage those triggers that can cause 
                        negative emotions.  Included are some other tools to help keep the ‘feel good’ switched on.
                    </p>

                    { 
                    !user?.username 
                    ? (
                        <div style={{textAlign: "center", paddingTop:"0.25rem"}}>
                            <Nav.Link style={{display:"inline", color:"white"}} as={Link} to="/login">login</Nav.Link> / 
                            <Nav.Link style={{display:"inline", color:"white"}} as={Link} to="/signup">signup</Nav.Link>
                        </div>
                    ) : (
                    <div style={{textAlign: "center", paddingTop:"0.25rem"}}>
                        <Nav.Link style={{display:"inline", color:"white"}} as={Link} to="/questions">Get Started</Nav.Link> | 
                        <Nav.Link style={{display:"inline", color:"white"}} onClick={Auth.logout}>Logout</Nav.Link>
                    </div>
                    )
                    }

                </div>

            </div>
        </>
    );
};

export default Landing;