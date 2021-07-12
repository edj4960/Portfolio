import React, { useState, useEffect } from 'react';

import Divider from '../components/Divider';
import NavBar from '../components/NavBar';

import './Intro.scss'
import { NAV_BAR_HEIGHT } from '../Constants';

const Intro = () => {
    // const [offsetY, setOffsetY] = useState(0);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    // const handleScroll = () => setOffsetY(window.pageYOffset);
    const handleResize = () => setWindowHeight(window.innerHeight);

    // Event Listeners
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // useEffect(() => {
    //     window.addEventListener("scroll", handleScroll);
    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, []);

    return (
        <div className="intro-pg">
            <div 
                className="title-div"
                style={{height: `${windowHeight-NAV_BAR_HEIGHT-20}px`}}
            >
                <h1 className="text-xlg font-title">Evan Jones</h1>
                <h4>Full-Stack React and NodeJS Developer</h4>
            </div>
        </div>
    )
}

export default Intro;