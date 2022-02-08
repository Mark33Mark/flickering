
import React                  from "react";
import Navbar                 from "../components/Navbar";
import { useQuery }           from "@apollo/client";
import { QUERY_USER_TESTS }   from "../utils/queries";
import MakeNote               from "../components/MakeNote";  

import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
}                             from "chart.js";

import { PolarArea }          from "react-chartjs-2";
import Auth                   from "../utils/auth";

ChartJS.register(
        RadialLinearScale,
        ArcElement,
        Tooltip,
        Legend
    );


export default function Today() {
    
    const { loading, data } = useQuery( QUERY_USER_TESTS, {

        variables: { username: Auth.getProfile().data.username },
    });

    const test = data?.user.questions || {};

    if (loading) {
    return <div>Loading...</div>;
    }

    const recentTest = test[test.length-1].answers
    const testDate = test[test.length-1].createdAt

    console.log(recentTest)

    const graphData = {
        labels: ["Refreshed", "Mindful / Self-Aware", "Relaxed / Calm", "Supported", "Attached"],
        datasets: [
            {
                label: "# of Votes",
                data: recentTest,
                backgroundColor: [
                    "rgba(255, 99, 132, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(255, 206, 86, 0.5)",
                    "rgba(75, 192, 192, 0.5)",
                    "rgba(153, 102, 255, 0.5)",
                ],
                borderWidth: 1,
            },
        ],
    };


    return (
        <>
            <Navbar />

            <h1 style={{color:"white", textAlign: "center", margin:"1rem auto"}}> 
                {Auth.getProfile().data.username}'s <br /> 
                Recent Answers 
            </h1>
            <h4 style={{color:"white", textAlign: "center", margin:"1rem auto"}}> 
                test date: {testDate} 
            </h4>

            <div style={{width:"450px", margin:"2rem auto", backgroundColor:"white"}}>
                <PolarArea 
                    data={graphData} 
                />;
            </div>

            <MakeNote tests = {test}  />
                
        </>
    )
}
