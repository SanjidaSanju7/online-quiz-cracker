import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Home from '../components/Home/Home';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Home></Home>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;