import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Home from '../Home/Home';
import Topic from '../Topic/Topic';


const Topics = () => {
    const { data } = useLoaderData();
    console.log(data);
    return (

        <div>
            <Home></Home>
            <div className=" grid justify-items-center mb-5 gap-5 row-gap-3 lg:grid-cols-2 lg:row-gap-8 sm:grid-cols-1 md:grid-cols-2 sm:row-gap-2">
                {
                    data.map(topic => (
                        <Topic
                            key={topic.id}
                            topic={topic}
                        ></Topic>
                    ))
                }
            </div>
        </div>

    );
};

export default Topics;