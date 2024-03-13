import React, { useState, useEffect } from 'react';
import Chart from "react-apexcharts";
import axios from 'axios';

const chartConfig = {
    type: "line",
    height: 240,
    series: [
        {
            name: "hours",
            data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
        },
    ],
    options: {
        chart: {
            toolbar: {
                show: false,
            },
        },
        title: {
            show: "",
        },
        dataLabels: {
            enabled: false,
        },
        colors: ["#FFFFFF"],
        stroke: {
            lineCap: "round",
            curve: "smooth",
        },
        markers: {
            size: 0,
        },
        xaxis: {
            axisTicks: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            labels: {
                show: false,
                style: {
                    colors: "#616161",
                    fontSize: "12px",
                    fontFamily: "inherit",
                    fontWeight: 400,
                },
            },
            categories: [
                "Mon",
                "Tue",
                "Wed",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
        },
        yaxis: {
            labels: {
                show: false,
                style: {
                    colors: "#616161",
                    fontSize: "12px",
                    fontFamily: "inherit",
                    fontWeight: 400,
                },
            },
        },
        grid: {
            show: false,
            borderColor: "#dddddd",
            strokeDashArray: 5,
            xaxis: {
                lines: {
                    show: true,
                },
            },
            padding: {
                top: 5,
                right: 20,
            },
        },
        fill: {
            opacity: 1,
        },
        tooltip: {
            theme: "dark",
        },
    },
};

const ActivityChart = () => {

    const [activityData, setActivityData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchData = async () => {

            const axiosConfig = {
                method: 'GET',
                url: `https://wakatime.com/share/@018dc7ca-a471-4528-9e24-51a965772997/f2b55831-8585-40dd-ab6f-eefc918e7e08.json`,
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            try
            {
                const response = await axios.request(axiosConfig);
                console.log(response.data);
            }
            catch (error) {
                console.error(error);
            }
        }

        fetchData();

    }, []);

    return (
        <Chart {...chartConfig} />
    );
}

export default ActivityChart;