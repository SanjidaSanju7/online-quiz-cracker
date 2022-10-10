import React from 'react';
import image from '../../images/Online test-pana.png'

const Home = () => {
    return (

        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex flex-col justify-center p-10 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl  text-emerald-600">Let's Quiz </h1>
                    <h2 className="text-5xl font-bold leading-none sm:text-6xl  text-emerald-600">Test your skills and become a master</h2>
                    <p className="mt-6 mb-8 text-lg sm:mb-12 text-slate-500">We organize quizzes on various topics. Sign up if you haven't already and get access to millions of quizzes on the topic of your interest. <br /> <span className=' text-slate-800 font-semibold'>Start your journey here :</span>
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <button rel="noopener noreferrer" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100 bg-emerald-600 hover:bg-blue-700">Sign Up</button>
                    </div>
                </div>
                <div className="flex items-center justify-center p-6 mt-10 lg:mt-0 h-80 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src={image} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
            </div>
        </section>


    );
};

export default Home;
