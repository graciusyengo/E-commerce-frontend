
import React from 'react'
import TopBar from '../../TopBar/TopBar'
import './Header.css'
import { LuShoppingCart } from "react-icons/lu";
import { FaBars } from "react-icons/fa";

function Header() {
    return (
        <>
            <TopBar />

            <div className='header'>

                <div className='container-logo'>
                    <FaBars size={30} />
                    <h1 class="logo">Mon Logo</h1>

                    <LuShoppingCart size={25} />

                    <nav className="navbar">
                        <ul>
                            <li><a href="#home">Accueil</a></li>
                            <li><a href="#about">Boutique</a></li>
                            <li><a href="#contact">Homme</a></li>
                            <li><a href="#home">Femme</a></li>
                            <li><a href="#about">Enfants</a></li>
                            <li><a href="#contact">Electronique</a></li>
                            <li><a href="#home">Nos Contacts</a></li>
                            <li><a href="#about">À propos</a></li>

                        </ul>
                    </nav>
                </div>

                <div className='containerInput'>
                    <input type="text" placeholder="Quoi chercher vous aujourd'hui ?" />
                </div>
            </div>

        </>
    )
}

export default Header