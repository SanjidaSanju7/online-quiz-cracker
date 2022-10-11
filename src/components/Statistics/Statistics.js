import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';


const Statistics = () => {
    const data = [
        {
            name: 'React',
            total: 8,

        },
        {
            name: 'JavaScript',
            total: 9,

        },
        {
            name: 'CSS',
            total: 8,

        },
        {
            name: 'Git',
            total: 11,

        },

    ];

    return (
        <div>
            <LineChart className='m-auto mt-5' width={350} height={400} data={data} >
                <Line type="monotone" dataKey="total" stroke="green" />
                <XAxis dataKey="name" stroke='green' />
                <YAxis stroke='green' />
                <Tooltip></Tooltip>
            </LineChart>

            <h2 className='text-3xl mt-10 mb-8 font-semibold text-emerald-700'>Quiz Statistics</h2>
        </div>
    );
};

export default Statistics;