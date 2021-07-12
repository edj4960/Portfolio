import React, { useState, useEffect } from 'react';

import { NAV_BAR_HEIGHT, 
        NAV_BAR_ANIMATION_DELAY, 
        NAV_BAR_ITEMS_ANIMATION_DELAY } from '../Constants';

import Logo from './Logo';

import './NavBar.scss'

const NavBar = () => {
    // const [offsetY, setOffsetY] = useState(0);
    const [sticky, setSticky] = useState(false);
    const [navbarOffset, setNavbarOffset] = useState(0);
    const [showNavBar, setShowNavBar] = useState(false);
    const [showNavItems, setShowNavItems] = useState(false);
    
    
    const handleScroll = () => {
        if (window.pageYOffset >= 500 && !sticky) {
            console.log("TRANSITIONING TO STICKY");
            transitionToSticky();
        } else if (window.pageYOffset < 500 && sticky) {
            console.log("TRANSITIONING TO NORMAL");
            transitionToNormal();
        }
    };
    
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [navbarOffset, sticky]);
    
    useEffect(() => {
        const navbar = document.getElementById("navbar");
        setNavbarOffset(navbar.offsetTop);
    }, []);

    // Animations
    useEffect(() => {
        handleScroll();
    }, []);

    const transitionToSticky = () => {
        runHideNavBar();
        setTimeout(() => {
            setSticky(true);
            runShowNavBar();
        }, 1000);
    }

    const transitionToNormal = () => {
        runHideNavBar();
        setTimeout(() => {
            setSticky(false);
            setTimeout(() => {
                runShowNavBar();
            },500);
        }, 1000);
    }
    
    const runShowNavBar = () => {
        setShowNavBar(true);
        setTimeout(() => {
            setShowNavItems(true);
        }, 500)
    };

    const runHideNavBar = () => {
        setShowNavItems(false);
        setTimeout(() => {
            setShowNavBar(false);
        }, 500);
    }

    return (
    <div 
        id="navbar" 
        style={{height:NAV_BAR_HEIGHT}}
        className={sticky&&'sticky'}
    >
        <div className={`nav-items ${showNavBar&&'show'}`}>
            {sticky&&<Logo />}
            <div className={`nav-item ${showNavItems&&'show'}`}>About Me</div>
            <div className={`nav-item ${showNavItems&&'show'}`}>My Work</div>
            <div className={`nav-item ${showNavItems&&'show'}`}>Experience</div>
            <div className={`nav-item ${showNavItems&&'show'}`}>Contact</div>
        </div>
    </div>
    )
}

export default NavBar;