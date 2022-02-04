import React    from "react";
import Navbar   from "../components/Navbar";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    }                   from "chart.js";

    import { Line }     from "react-chartjs-2";

    
    ChartJS.register(
            CategoryScale,
            LinearScale,
            PointElement,
            LineElement,
            Title,
            Tooltip,
            Legend
    );

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
        text: "Your answers",
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


    const yAxisStart  = 1;
    const yAxisLength = 15;
    const labels = [...new Array(yAxisLength)].fill().map((_,i) => yAxisStart + i );

    const data = {
    labels,
    datasets: [
        {
            label: "Refreshed",
            data: [2,2,3,4,5,4,4],
            borderColor: "rgba(255, 99, 132, 0.5)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            yAxisID: "y",
        },
        {
            label: "Mindful / Self-Aware",
            data: [4,4,4,"",4,3,2,4],
            borderColor: "rgba(53, 162, 235,0.5)",
            backgroundColor: "rgba(53, 162, 235, 0.5)",
            yAxisID: "y",
        },
        {
            label: "Relaxed / Calm",
            data: [4,4,4,4,3,2,4],
            borderColor: "purple",
            backgroundColor: "purple",
            yAxisID: "y",
        },
        {
            label: "Supported",
            data: [3,3,3,3,3,2,1],
            borderColor: "rgba(0, 255, 10, 0.5)",
            backgroundColor: "rgba(0, 255, 10, 0.5)",
            yAxisID: "y",
        },
        {
            label: "Attached",
            data: [3,3,3,5,3,2,1],
            borderColor: "yellow",
            backgroundColor: "yellow",
            yAxisID: "y",
        },
    ],
};

export default function History() {
    return (
        <>
            <Navbar />

            <div style={{width:"500px", margin:"0 auto"}}>
                <Line options={options} data={data} />;
            </div>
        </>
    )
}
