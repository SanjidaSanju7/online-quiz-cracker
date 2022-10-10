import React from 'react';

const Topic = ({ topic }) => {
    const { id, name, logo, total } = topic
    return (

        <div className="container max-w-xs rounded-md shadow-lg bg-emerald-100 ">
            <div>
                <img src={logo} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-slate-200 border-3 p-2" />
            </div>
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
                    <p className="dark:text-gray-100">Total Questions: {total}</p>
                </div>
                <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-m bg-emerald-400 hover:bg-emerald-700 ">Start Practice</button>
            </div>


        </div>

    );
};

export default Topic;