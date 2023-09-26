import React from 'react';
import { Bar } from 'react-chartjs-2';


export default function Chart({ data }) {
    return (
        <div className="candlestick-chart">
            <Bar
                data={data}
                options={{
                    scales: {
                        x: {
                            type: 'time',
                            time: {
                                unit: 'day',
                            },
                            title: {
                                display: true,
                                text: 'Date',
                            },
                        },
                        y: {
                            title: {
                                display: true,
                                text: 'Price',
                            },
                        },
                    },
                }}
            />
        </div>
    );
};