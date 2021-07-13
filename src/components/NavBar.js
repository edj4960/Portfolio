import React, { useState, useEffect } from 'react';

import { Link, Element, Events,  } from 'react-scroll';

import Logo from './Logo';

import { ABOUT_ME_NAME, MY_WORK_NAME, EXPERIENCE_NAME, CONTACT_NAME } from '../Constants';

import { NAV_BAR_HEIGHT, 
        NAV_BAR_ANIMATION_DELAY, 
        NAV_BAR_ITEMS_ANIMATION_DELAY } from '../Constants';

import './NavBar.scss'

const NavItem = ({title, show, link}) => {

    return (
        <Link 
            className={`nav-item ${show&&'show'}`} 
            activeClass="active"
            to={link} 
            spy={true} 
            smooth={true} 
            isDynamic={true}
        >
            {title}
        </Link>
    )
}

const NavBar = () => {
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
        if (window.pageYOffset >= 500) {
            setSticky(true);
            runShowNavBar();
        } else {
            setTimeout(() => {
                runShowNavBar();
            }, 1000);
        }
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
    <div style={{height:NAV_BAR_HEIGHT}}>
        <div 
            id="navbar" 
            style={{height:NAV_BAR_HEIGHT}}
            className={sticky&&'sticky'}
        >
            <div className={`nav-items ${showNavBar&&'show'}`}>
                {(sticky&&showNavBar)&&<Logo />}
                <NavItem title="About Me" show={showNavItems} link={ABOUT_ME_NAME} />
                <NavItem title="My Work" show={showNavItems} link={MY_WORK_NAME} />
                <NavItem title="Experience" show={showNavItems} link={EXPERIENCE_NAME} />
                <NavItem title="Contact" show={showNavItems} link={CONTACT_NAME} />
            </div>
        </div>
    </div>
    )
}

export default NavBar;