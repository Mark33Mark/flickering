
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

                <div style={{width:"500px", color:"white", margin:"0 auto"}}>
                    <h1 style={{ color: "white", margin:"2rem auto" }}>
                        About   
                    </h1>

                    <p>
                        If this page looks like TL:DR to you, then read this: 
                    </p>
                    <blockquote style={{padding:"0 1rem", fontWeight:"700"}}>
                        "Mental ill-health is increasing rapidly globally and our services are not coping."
                    </blockquote>
                    <p>
                        Over the last decade or more the economic 'prosperous' countries around the world have been experiencing significant increases in decling mental health.
                    </p>
                    <p>
                        Alarmingly, mental ill-health is unfortunately very common in young people. 
                    </p>
                    <p>
                        The Australian Institute of Health and Welfare’s National Health Survey (2017–18) estimated that: 
                    </p>
                    <p>
                        1 in 5 (20%, or 4.8 million) Australians reported that they had a mental or behavioural condition during the collection period (July 2017 to June 2018); 
                    </p>
                    <p>
                        Females reported a higher proportion of mental or behavioural conditions (22%) than males (18%); and overall, 15–24 year olds had the highest proportion of mental or behavioural conditions (26%);
                    </p>
                    <p>
                        In December 2021 the Australian Bureau of Statistics released the first insights from the National Study of Mental Health and Wellbeing, 2020-21.  The following images summarise some key findings:
                    </p>
                    <img
                            alt=""
                            src="./PsychologicalDistress.jpg"
                            width="95%"
                            height="auto"
                            style={{position:"relative", marginTop:"2rem"}}
                        />
                                                <img
                            alt=""
                            src="./UseMentalHealthServices.jpg"
                            width="95%"
                            height="auto"
                            style={{position:"relative"}}
                        />
                                                <img
                            alt=""
                            src="./wellbeing.jpg"
                            width="95%"
                            height="auto"
                            style={{position:"relative"}}
                        />
                </div>


                <div style={{width:"500px", color:"white", margin:"0 auto"}}>
                    
                    <h3 style={{ color: "white", margin:"2rem auto" }}>
                        Links to helpful resources: 
                    </h3>

                    <p>
                    Click on the logos to be redirected to their website,
                    </p>
                    <a 
                        href = "https://www.healthdirect.gov.au/australian-mental-health-services" 
                        target="_blank" 
                        rel="noreferrer" 
                        aria-label="Australian Government mental health advice."
                    >
                        <img
                            alt=""
                            src="./healthdirect_logo.svg"
                            width="30%"
                            height="auto"
                            style={{position:"relative", marginBottom:"5rem"}}
                        />
                    </a>
                    <a 
                        href = "https://www.beyondblue.org.au/" 
                        target="_blank" 
                        rel="noreferrer" 
                        aria-label="Beyond Blue is an Australian Charity focused on mental health in Australia."
                    >
                        <img
                            alt=""
                            src="./FeelingBlue.png"
                            width="30%"
                            height="auto"
                            style={{position:"relative", margin:"0 0 5rem 5rem"}}
                        />
                    </a>
                    
                </div>

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