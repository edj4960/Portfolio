import React, { useState, useEffect } from 'react';

import Divider from '../components/Divider';

import './Intro.scss'

const Intro = () => {
    const [offsetY, setOffsetY] = useState(0);

    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {

    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="intro-pg d-flex w-100">
            <div 
                className="left-section w-50 h-100 text-right align-content-center"
                style={{transform: `translateX(${-offsetY}px)`}}
            >
                <h1 className="text-xlg visible font-title mr-4">Evan</h1>
                <h4 className="mr-2">
                    Full-Stack React 
                </h4>
            </div>
            <div 
                className="right-section w-50"
                style={{transform: `translateX(${offsetY}px)`}}
            >
                <h1 className="text-xlg visible font-title ml-4">Jones</h1>
                <h4 className="ml-1">
                    and Node developer
                </h4>
            </div>
        </div>
    )
}

export default Intro;