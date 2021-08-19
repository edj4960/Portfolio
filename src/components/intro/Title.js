import React from 'react';

import './Title.scss';

const Title = () => {

  return (
    <svg className="title-background" width="593" viewBox="0 0 593 254" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g className="hex-filled">
        <path d="M161.274 17.1729L108.371 47.8213L108.371 109.126L161.275 139.776L214.181 109.128L214.18 47.825L161.274 17.1729Z" fill="url(#paint0_radial)" shapeRendering="geometricPrecision" />
      </g>
      <g className="hex-outlined">
        <path d="M299.229 89.9054L299.229 33.212L348.132 4.8809L397.038 33.2156L397.038 89.9074L348.133 118.239L299.229 89.9054Z" stroke="#6AC28F" strokeWidth="8" shapeRendering="geometricPrecision" />
      </g>
      <g className="hex-outlined">
        <path d="M171.753 212.797L171.753 155.527L221.156 126.906L270.562 155.531L270.562 212.799L221.157 241.42L171.753 212.797Z" stroke="#6AC28F" strokeWidth="7" shapeRendering="geometricPrecision" />
      </g>
      {/* <g> */}
        {/* <rect x="134.953" y="162.654" width="320.552" height="34.8019" fill="white" fill-opacity="0.79" shape-rendering="geometricPrecision" /> */}
      {/* </g> */}
      <defs>
        <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(161.275 78.4752) rotate(121.162) scale(63.8853 73.6519)">
          <stop offset="0.25" stopColor="#6FCF97" />
          <stop offset="1" stopColor="#86D5A7" />
        </radialGradient>
      </defs>
    </svg>
  )
};

export default Title;