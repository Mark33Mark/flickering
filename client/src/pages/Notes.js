
import React                  from "react";
import { Link }               from "react-router-dom";
import Navbar                 from "../components/Navbar";
import NotesHistory           from "../components/NotesHistory";  
import Auth                   from '../utils/auth';


export default function Notes() {
    


    return (
    
        <>
        
            {Auth.loggedIn() ? (
                
                <>
                    <Navbar />

                        <div style={{color: "white", maxWidth:"400px", margin:"0 auto" }}>

                            <h3 style={{color:"white", textAlign: "center", margin:"1rem auto"}}> 

                                {Auth.getProfile().data.username}'s <br /> 
                                Notes History
                            </h3>
                        
                            <h5 style={{fontSize:"1rem", color: "white", marginLeft:"-10rem"}}>
                                previous 12 responses:
                            </h5>
                        </div>

                        <NotesHistory />
                </>
                
            ) : (
                    <p style={{color:"white", margin:"20% 40%"}}>
                        Please log in to save a note. <br />
                        <Link to="/login">login</Link>
                    </p>
                )}
            
        </>

    )
}
