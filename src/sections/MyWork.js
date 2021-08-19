import React from 'react';
import { Link, Element, Events, } from 'react-scroll';

// Components
import ProjectGrid from '../components/projects/ProjectGrid';

import { EXAMPLES, MY_WORK_NAME } from '../Constants';

import './MyWork.scss'

const MyWork = () => {

    return (
        <Element name={MY_WORK_NAME} className="my-work-pg">
            {/* <img className="accent accent-1" src={Accent1} />
            <img className="accent accent-2" src={Accent2} />
            <img clasName="line-accent" src={LineAccent1} /> */}
            <h2 className="">My Work</h2>
            <br />
            <ProjectGrid projects={EXAMPLES} />

            <div style={{ height: 5000 }} />
            {/* <ProjectCard />
            <ProjectCard /> */}
        </Element>
    )
}

export default MyWork;