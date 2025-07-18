import React from 'react';
import NavBar from '../components/navbar/NavBar';
import Sidebar from '../components/sidebar/SideBar';
import Footer from '../components/footer/Footer';
import {Outlet} from "react-router";

const Layout = () => {
    return (
        <div>
        <NavBar />
            <div>
                <Sidebar />
                <Outlet />
            </div>
            <Footer/>
        </div>
    );
};

export default Layout;