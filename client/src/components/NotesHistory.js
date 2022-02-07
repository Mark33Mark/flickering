
import React                  from "react";
import { useQuery }           from "@apollo/client";
import { QUERY_USER_TESTS }   from "../utils/queries";
import AllNotes               from "../components/AllNotes";  

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    }                       from "chart.js";


import { Line }             from "react-chartjs-2";
import Auth                 from "../utils/auth";


    ChartJS.register(
            CategoryScale,
            LinearScale,
            PointElement,
            LineElement,
            Title,
            Tooltip,
            Legend
    );



export default function NotesHistory() {


    const { loading, data } = useQuery( QUERY_USER_TESTS, {
        variables: { username: Auth.getProfile().data.username },
    });

    const test = data?.user.questions || {};

    if (loading) {
        return <div>Loading...</div>;

    }

    const startAnswers = test.length<12 ? 0: test.length-12

    const answeredQ1 = test.map((val)=> val.answers[0] ).slice( startAnswers ,test.length )
    const answeredQ2 = test.map((val)=> val.answers[1] ).slice( startAnswers ,test.length )
    const answeredQ3 = test.map((val)=> val.answers[2] ).slice( startAnswers ,test.length )
    const answeredQ4 = test.map((val)=> val.answers[3] ).slice( startAnswers ,test.length )
    const answeredQ5 = test.map((val)=> val.answers[4] ).slice( startAnswers ,test.length )
    const created    = test.map((val)=> val.createdAt ).slice( startAnswers ,test.length )

    const options = {
        responsive: true,
        interaction: {
            mode: "index",
            intersect: false,
        },
        stacked: false,
        plugins: {
            title: {
            display: true,
            text: "last 12 months",
            color:"white", 
            },
        },
        scales: {
            y: {
            type: "linear",
            display: true,
            position: "left",
            grid: {
                drawOnChartArea: false,
            },
            },
        },
        };
    
        // const yAxisStart  = 1;
        // const yAxisLength = 12;    
        // const labels = [...new Array(yAxisLength)].fill().map((_,i) => yAxisStart + i );
    

        const labels = created;
    
        const table_data = {
        labels,
        datasets: [
            {
                label: "Refreshed",
                data: answeredQ1,
                borderColor: "rgba(255, 99, 132, 0.5)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
                yAxisID: "y",
            },
            {
                label: "Mindful / Self-Aware",
                data: answeredQ2,
                borderColor: "rgba(53, 162, 235,0.5)",
                backgroundColor: "rgba(53, 162, 235, 0.5)",
                yAxisID: "y",
            },
            {
                label: "Relaxed / Calm",
                data: answeredQ3,
                borderColor: "purple",
                backgroundColor: "purple",
                yAxisID: "y",
            },
            {
                label: "Supported",
                data: answeredQ4,
                borderColor: "rgba(0, 255, 10, 0.5)",
                backgroundColor: "rgba(0, 255, 10, 0.5)",
                yAxisID: "y",
            },
            {
                label: "Attached",
                data: answeredQ5,
                borderColor: "yellow",
                backgroundColor: "yellow",
                yAxisID: "y",
            },
        ],
    };



    return (
        <>

            <div style={{width:"750px", margin:"0 auto", backgroundColor:"white"}}>
                <Line options={options} data={table_data} />;
            </div>

            <AllNotes testData = {test} />
        </>
    )
}
