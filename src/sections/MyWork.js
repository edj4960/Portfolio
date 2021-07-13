import React from 'react';

// Components
import ExampleCard from '../components/ExampleCard';

import { Link, Element, Events,  } from 'react-scroll';

import { MY_WORK_NAME } from '../Constants';

import './MyWork.scss'

const MyWork = () => {

    return (
        <Element name={MY_WORK_NAME} className="my-work-pg">
            {/* <img className="accent accent-1" src={Accent1} />
            <img className="accent accent-2" src={Accent2} />
            <img clasName="line-accent" src={LineAccent1} /> */}
            <h1 className="font-title text-xlg text-primary">My Work</h1>

            <div style={{height: 5000}} />
            {/* <ExampleCard />
            <ExampleCard /> */}
        </Element>
    )
}

export default MyWork;