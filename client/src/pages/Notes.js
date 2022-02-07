
import React                  from "react";
import Navbar                 from "../components/Navbar";
import NotesHistory           from "../components/NotesHistory";  
import Auth                   from '../utils/auth';


export default function Notes() {
    



    return (
        <>
            <Navbar />

            <h3 style={{color:"white", textAlign: "center", margin:"1rem auto"}}> 

                {Auth.getProfile().data.username}'s <br /> 
                Notes History

            </h3>

            <NotesHistory />

                
        </>
    )
}
