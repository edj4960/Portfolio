import React from 'react';

import './Divider.scss';

const Divider = ({width="70%"}) => {

    return (
        <div 
            style={{width: width}}
            className="divider-container"
        >
            <div className="divider-1"/>
            <div className="divider-2"/>
        </div>
    )
};

export default Divider;