
import React, { useState, useEffect }   from "react";
import { searchAdviceSlip }             from "../utils/API";
import { useParams }                    from 'react-router-dom';
import { useQuery }                     from '@apollo/client';
import Navbar                           from "../components/Navbar";
import { QUERY_USER, GET_ME }           from '../utils/queries';

import "../index.css";

const Advisor = () => {

    const { username: userParam } = useParams();

    const [ advice, setAdvice ] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response      = await searchAdviceSlip();
            const adviceFound   =  await response.json();
            setAdvice(adviceFound.slip.advice);
            console.log(adviceFound);
        }
        fetchData();
        }, [setAdvice]
    );


    const findAdvice = async() => {

        try{
            const response = await searchAdviceSlip();
            const adviceFound =  await response.json();
            console.log( adviceFound  ); 

            setAdvice(adviceFound.slip.advice);
    
            } catch ( err ) {
            console.error( err );
        }
    };    

    
    const handleButtonClick = ( event ) => {
        event.preventDefault();
        findAdvice();
    };

// =====================================================================

    const { loading, data } = useQuery(userParam ? QUERY_USER : GET_ME, {
        variables: { username: userParam },
    });
    
    const user = data?.me || data?.user || {};
        
    if (loading) {
        return <div>Loading...</div>;
    }
    
    if (!user?.username) {

        return (
            <>
                <Navbar />
                <div style={{width:"350px", margin:"0 auto"}}>
                    <h4 style={{color:"white", textAlign: "center"}}>
                        You need to be logged to access this page. 
                        <br />
                        Please use the navigation links above to
                        sign up or log in!
                    </h4>
                </div>
            </>
        );
    }

// =====================================================================

    return (
        <>
        <Navbar />
            <div className="advisor"  >
            <div className="card">
                <h1 className="heading">Welcome {user.username} <br /> to your friendly advisor.</h1>
                <h3 className="advice">{advice}</h3>
                <button className="button" onClick={handleButtonClick}>
                    <span>More advice?</span>
                </button>
            </div>
        </div>
        </>
    );
}

export default Advisor;