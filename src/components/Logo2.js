import React from 'react'
// import Triangle from '../assets/Triangle.svg';

import LogoText from '../assets/LogoText.svg'

import './Logo2.scss';

const Logo2 = () => {
    return (
        <div className="hexagon-container">
            <div className="hexagon">
                <div className="remainingTriangles">
                    <div class="triangleAfter"></div>
                    <div class="triangleAfter"></div>
                    <div class="triangleAfter"></div>
                    <div class="triangleAfter"></div>
                    <div class="triangleAfter"></div>
                    <div class="triangleAfter"></div>
                </div>
                <div className="hexCont">
                    <div className="flipShadow"></div>
                </div>
                <div className="hexCont">
                    <div className="flipTriangle"></div>
                </div>
                <div className="hexPlaceholders"></div>
                <img className="logo-text" src={LogoText} />
            </div>
        </div>
    )
}

export default Logo2;