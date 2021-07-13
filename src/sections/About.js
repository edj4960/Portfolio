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
            <h2>About Me</h2>
        </Element>
    )
}

export default About;