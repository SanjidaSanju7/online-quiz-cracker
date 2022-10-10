import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Header = () => {
    return (

        <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex justify-between h-16 mx-auto">
                <Link rel="noopener noreferrer" aria-label="Back to homepage" className="flex items-center p-2">
                    <FontAwesomeIcon icon={faLaptopCode} className='w-10 h-10 text-emerald-600 mt-1 '></FontAwesomeIcon>
                    <h1 className='text-4xl bold text-emerald-600 ml-3 font-semibold' >Online Quiz</h1>
                </Link>

                <ul className="items-stretch hidden space-x-3 md:flex">
                    <li className="flex">
                        <Link to='/home' rel="noopener noreferrer" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent text-emerald-600 font-semibold">Home</Link>
                    </li>
                    <li className="flex">
                        <Link to='/topics' rel="noopener noreferrer" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent
                        text-emerald-600 font-semibold">Topics</Link>
                    </li>
                    <li className="flex">
                        <Link to='/statistics' rel="noopener noreferrer" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400
                        text-emerald-600 font-semibold">Statistics</Link>
                    </li>
                    <li className="flex">
                        <Link to='/blog' rel="noopener noreferrer" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent
                        text-emerald-600 font-semibold">Blog</Link>
                    </li>
                </ul>
                <button className="flex justify-end p-4 md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </header>

    );
};

export default Header;