import React from 'react'
// import Triangle from '../assets/Triangle.svg';

import LogoText from '../assets/LogoText.svg'

import './Logo2.scss';

const Triangle = ({ angle = 0, x = 0, y = 0 }) => {
    return (
        <div
            className="triangle"
            style={{
                // transform: `
                //     rotate(${angle}deg)
                //     translate(${y}, ${x})    
                // `
            }}
            className="triangle"
        >
            <svg
                width="52"
                height="52"
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                    // position: 'absolute',
                    // transform: `
                    //     rotate(${angle}deg)
                    //     translate(${y}, ${x})    
                    // `
                }}
            >
                <path
                    d="M51 1.00114C51 0.725166 1.10874 50.8445 1.00017 50.9522C0.892157 51.0598 51 50.9522 51 50.9522V1.00114Z"
                    fill="#6FCF97"
                    stroke="black"
                />

            </svg>
        </div>
    )
}

const Logo2 = () => {
    return (
        <div style={{ margin: 150 }}>
            <div class="hexagon">
                <div className="remainingTriangles">
                    <div class="triangleAfter"></div>
                    <div class="triangleAfter"></div>
                    <div class="triangleAfter"></div>
                    <div class="triangleAfter"></div>
                    <div class="triangleAfter"></div>
                    <div class="triangleAfter"></div>
                </div>
                <div class="hexCont">
                    <div class="flipShadow"></div>
                </div>
                <div class="hexCont">
                    <div class="flipTriangle"></div>
                </div>
                <div class="hexPlaceholders"></div>
                <img class="logo-text" src={LogoText} />
            </div>
            {/* <svg
                width="100"
                height="100"
                viewBox="0 0 110 110"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="path"
            >
                <path
                    d="M 10,10 
                    H 100
                    V 100
                    H 10
                    V 10"
                    stroke="#6FCF97"
                    stroke-width="20"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                </path>
            </svg> */}


            {/* <svg width="106" height="106" viewBox="0 0 106 106" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M103 3H3V103H103V3Z" 
                    stroke="#353535" 
                    stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg> */}

        </div>
    )
}

export default Logo2;