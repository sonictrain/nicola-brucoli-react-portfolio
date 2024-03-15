import React, { useState, useEffect } from 'react';
import Chart from "react-apexcharts";
import axios from 'axios';

const chartConfig = {
    type: "line",
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
            width: 3,
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
                show: true,
                style: {
                    colors: "#616161",
                    fontSize: "12px",
                    fontFamily: "inherit",
                    fontWeight: 400,
                },
            },
            categories: [],
        },
        yaxis: {
            labels: {
                show: true,
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
        zoom: {
            enabled: false,
        },
    },
};

const ActivityChart = () => {

    const [activityData, setActivityData] = useState({
        series: [
            {
                name: "",
                data: [],
            },
        ],
        categories: []
    });
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
            try {
                const response = await axios.request(axiosConfig);
                setActivityData({
                    series: [
                        {
                            name: "hours",
                            data: response.data.data.map(day => (day.grand_total.total_seconds / 3600).toFixed(2))
                        }
                    ],
                    categories: response.data.data.map(date => date.range.date)
                })
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        console.log(activityData.series)
    }, [activityData])

    return (
        <div className='mt-10'>
            <Chart
                {...chartConfig}
                series={activityData.series}
                height={180}
            options = {{
                ...chartConfig.options,
                xaxis: {
                    ...chartConfig.options.xaxis,
                    categories: activityData.categories
                }
            }}
            />
        </div>
    );
}

export default ActivityChart;