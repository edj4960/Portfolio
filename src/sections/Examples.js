import React from 'react';

// Components
import ExampleCard from '../components/ExampleCard';

// Assets
import Accent1 from '../assets/Accent1.svg';
import Accent2 from '../assets/Accent2.svg';
import LineAccent1 from '../assets/LineAccent1.svg';

import './Examples.scss'

const Examples = () => {

    return (
        <div className="examples-pg">
            {/* <img className="accent accent-1" src={Accent1} />
            <img className="accent accent-2" src={Accent2} />
            <img clasName="line-accent" src={LineAccent1} /> */}
            <h1 className="font-title text-xlg text-primary">My Work</h1>
            {/* <ExampleCard />
            <ExampleCard /> */}
        </div>
    )
}

export default Examples;