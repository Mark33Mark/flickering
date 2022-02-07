
import React                  from "react";
import { Link }               from "react-router-dom";
import Navbar                 from "../components/Navbar";
import Auth                   from '../utils/auth';


export default function About() {
    


    return (
    
        <>
        
        {Auth.loggedIn() ? (
            
            <>
                <Navbar />
                <h1 style={{width:"450px", color: "white", margin:"2rem auto" }}>About me   </h1>


            </>
            
            ) : (
                    <p>
                    Please log in. <br />
                    <Link to="/login">login</Link>
                    </p>
                )}
            
            </>
            
                
    )
}