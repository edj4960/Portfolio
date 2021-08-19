import React from 'react';

const Hex = ({ x, y, className }) => {


  return (
    <div
      className={className}
      style={{
        transform: `translate(${x}, ${y})`,
        position: 'absolute'
      }}
    >
      <svg
        width="114"
        height="131"
        viewBox="0 0 114 131"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f)">
          <path d="M7.62048 94.0069L7.62049 36.7371L57.0234 8.11634L106.429 36.7407L106.43 94.0089L57.0244 122.63L7.62048 94.0069Z" stroke="#6AC28F" strokeWidth="7" />
        </g>
        <defs>
          <filter id="filter0_f" x="0.120483" y="0.0713806" width="113.81" height="130.603" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur" />
          </filter>
        </defs>
      </svg>
    </div>
  )
}

export default Hex;