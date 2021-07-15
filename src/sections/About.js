import React from 'react';
import { Element } from 'react-scroll';

import { ABOUT_ME_NAME } from '../Constants';

import './About.scss';

const About = () => {

    return (
        <Element 
            name={ABOUT_ME_NAME}
            className="about-me-pg"
        >
            <div className="about-me-content">
                <div className="title">
                    <h2>About Me</h2>
                </div>
                <div className="text">
                    <p>
                        Hello! My name is Evan and I enjoy creating websites and apps.
                        I have been developing software since 2018 and have loved every minute of it.
                        On top of this I have create IOT software.
                    </p>
                    <p>
                        Hello! My name is Evan and I enjoy creating websites and apps.
                        I have been developing software since 2018 and have loved every minute of it.
                        On top of this I have create IOT software.
                    </p>
                </div>
            </div>
        </Element>
    )
}

export default About;