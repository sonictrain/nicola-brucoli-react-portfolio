import React, { useState, useEffect } from 'react';
import Chart from "react-apexcharts";
import axios from 'axios';
import {
    Spinner,
    Alert,
    Button
} from "@material-tailwind/react";

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
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState("");
    const [openAlert, setOpenAlert] = useState(false);

    useEffect(() => {

        const fetchData = async () => {

            setError("")
            setOpenAlert(false)
            setLoader(true)

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
                setLoader(false)
            } catch (err) {
                setError(err.message)
                setLoader(false)
                setOpenAlert(true)
            }
        }
        fetchData();
    }, []);

    return (
        // Main container
        <div className='flex justify-center items-center h-48'>

            { loader?
                (
                    <Spinner color="teal" className="h-12 w-12" />
                )
                
                :
                
                (
                    openAlert ? (

                        <div className=' border-l-4 border-[#ff4242] bg-[#ff4242]/10 w-full flex flex-row justify-between'>
                            <Alert
                                className="font-medium rounded-none bg-transparent text-[#ff4242]">
                                    {error}
                            </Alert>
                            <Button
                                variant="text"
                                onClick={() => fetchData()}
                                className='mx-auto text-[#ff4242]'>
                                RETRY
                            </Button>
                        </div>
        
                    ) : (
        
                        <div className='mt-10 w-full'>
                            <Chart
                                {...chartConfig}
                                series={activityData.series}
                                height={180}
                                options={{
                                    ...chartConfig.options,
                                    xaxis: {
                                        ...chartConfig.options.xaxis,
                                        categories: activityData.categories
                                    }
                                }}
                            />
                        </div>
                    )

                )
            }

        </div>

    );
}

export default ActivityChart;