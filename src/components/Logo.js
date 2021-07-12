import React from 'react';

import "./Logo.scss";

const Logo = ({height=45, hide=false}) => {

    return (
        <div id="logo" className={hide&&"test"}>
            <svg height={height} viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="E" d="M0 5V0H3V1H1.00567V2H3V3H1.00567V4H3V5H0Z" fill="#353535"/>
                <path id="J" d="M1 0H2V4H0V3H1V0Z"/>
            </svg>
        </div>
    )
}

export default Logo;