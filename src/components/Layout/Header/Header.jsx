
import React, { useEffect } from 'react'
import TopBar from '../../TopBar/TopBar'
import './Header.css'
import { LuShoppingCart } from "react-icons/lu";
import { FaBars } from "react-icons/fa";
import { useState } from 'react';
import { FaSearch } from "react-icons/fa";

function Header() {

    const [showNavBar, setShowNavBar] = useState(false)
    const [showMenu, setShowMenu] = useState(false)
    const [showCategorie, setShowCategorie] = useState(false)
    const [isMobile, setIsMobile] = useState(false);

    const handleResize = () => {
        if (window.innerWidth <= 768) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };

    useEffect(() => {
        handleResize(); // Détecte la taille de l'écran au chargement initial
        window.addEventListener('resize', handleResize); // Écoute les changements de taille
        return () => window.removeEventListener('resize', handleResize); // Nettoyage après utilisation
    }, []);




    const toggleShowNavBar = () => {
        setShowNavBar(!showNavBar);
        setShowCategorie(false);
        setShowMenu(true)

    }

    const toggleMenu = () => {
        setShowCategorie(false);
        setShowMenu(true)

    }

    const toggleCategories = () => {
        setShowCategorie(true);
        setShowMenu(false)
    }

    return (
        <>
             {isMobile && showNavBar && (
                    <nav className="nav">
                        <div class="navbar-header">
                            <button className="close-btn" onClick={toggleShowNavBar}>Fermer ✖</button>
                            <div className="search-container">
                                <input type="text" className="search-input" placeholder="Rechercher..." />
                                <button className="search-btn"><FaSearch /></button>
                            </div>
                    
                        </div>
                      
                        {isMobile && showNavBar && (
                          <div class="nav-tabs">
                          <button className={`tab-btn ${!showCategorie ? 'active' : ''}`} onClick={toggleMenu}>Menu</button>
                          <button className={`tab-btn ${showCategorie ? 'active' : ''}`} onClick={toggleCategories}>Catégories</button>
                        </div>
                        )}


                        {isMobile && showNavBar && !showCategorie && (

                            <div className='menu active'>

                                <ul>
                                    <li><a href="#home">Accueil</a></li>
                                    <li><a href="#about">Boutique</a></li>
                                    <li><a href="#home">Nos Contacts</a></li>
                                    <li><a href="#about">À propos</a></li>

                                </ul>
                            </div>
                        )}



                        {isMobile && showCategorie && (
                            <div className='categories active'>

                                <ul>
                                    <li><a href="#home">Bebe et Enfant</a></li>
                                    <li><a href="#about">Beate et Soins</a></li>
                                    <li><a href="#contact">Cadeau et souvenir</a></li>
                                    <li><a href="#home">Electronique et Gadget</a></li>
                                    <li><a href="#about">Decorations Interieur</a></li>
                                    <li><a href="#contact">Electronique</a></li>
                                </ul>
                            </div>
                        )}

                       

                    </nav>
                     )}
            {/* {
                        isMobile && showNavBar && (
                            <div className='test'>
                             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quo tenetur minus, sint harum commodi amet tempora doloribus hic placeat! At, excepturi nostrum optio illo recusandae suscipit pariatur quis dolorum.
                             Dolorum ad et illum eum, vel enim doloribus a similique asperiores nihil deleniti, consectetur possimus rem nisi ex recusandae quisquam cum numquam blanditiis ullam eius? Sapiente nostrum a totam necessitatibus.
                             Neque eos blanditiis, rerum optio incidunt impedit aliquam totam, animi, iusto inventore provident! Obcaecati ex dolor veritatis reprehenderit porro. Corporis blanditiis a harum eius neque quam tempora! Assumenda, expedita doloribus.
                             Et nostrum sapiente cupiditate illum id? At iusto exercitationem libero eos repellendus, quo, officia laborum, reprehenderit ducimus distinctio fuga magni? Voluptate nihil voluptas asperiores! Fugit delectus quaerat cupiditate eos repellendus?
                             Autem itaque iure voluptates et deleniti velit officiis explicabo, alias dolore cumque accusantium aspernatur praesentium vero quaerat porro impedit ipsam veniam eaque sequi nobis, earum temporibus. Sint minus voluptatum sunt!</p>
                            </div>
                        )
            } */}
            <TopBar />
            <div className='header'>
                   

                    
                <div className='container-logo'>
                    <FaBars size={30} onClick={toggleShowNavBar} />
                    <h1 class="logo">Mon Logo</h1>

                    <LuShoppingCart size={25} />

                    
                </div>

                <div className='containerInput'>
                    <input type="text" placeholder="Quoi chercher vous aujourd'hui ?" />
                </div>

                <div className='marquee'>
                    <span>Nouvel arrivage </span>
                    <span>Les plus vendus</span>
                    <span>Les plus vendus</span>
                    <span>Nouvel arrivage </span>
                    <span>Les plus vendus</span>
                    <span>Les plus vendus</span>
                </div>
            </div>

        </>
    )
}

export default Header