
import React                            from "react";
import { Nav }                          from "react-bootstrap";

import InstallPWA                       from "../components/InstallPWA";


const Banner = () => {

    const refreshPage = () =>  { 
        window.location.href = window.location.origin +  "/";
    }; 

return ( 
        <>
            <InstallPWA />
            <Nav.Link to= "/" onClick={ refreshPage }>
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
        </>
    );

};

export default Banner;