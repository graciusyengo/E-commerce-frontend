import React from 'react';  // Assure-toi que React est bien importé
import Header from './Header/Header.jsx'
import Footer from './Footer/Footer.jsx';
import { Outlet } from 'react-router-dom';  // Assure-toi d'importer Outlet
import Main from '../Main/Main.jsx';
import Products from '../Products-Carousel/Products.jsx';

function Layout() {
    return (
        <div>
            <Header />
            <Main/> 
            <Products/>          
             <Outlet />
            <Footer />
        </div>
    );
}

export default Layout;  // Assure-toi d'utiliser 'export default'
