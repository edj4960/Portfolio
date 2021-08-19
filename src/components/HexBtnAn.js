import React, { useEffect, useState } from 'react';

import './HexBtnAn.scss'

const VX1 = 54.7238;
const VX2 = 71.5462;
const VX3 = 54.7215;

const START_TIME = '1300ms';
const DURATION = '300ms';
const START_TEXT = 1300;

const HexBtnAn = ({ title, width }) => {
  const paddedTitle = ` ${title} `
  const [innerText, setInnerText] = useState('');
  const [letterIdx, setLetterIdx] = useState(0);
  const [typeText, setTypeText] = useState(false);

  useEffect(() => {
    if (!typeText) return;

    setTimeout(() => {
      const newTitle = innerText + paddedTitle.substr(letterIdx, 1);
      setInnerText(newTitle)

      if (letterIdx <= paddedTitle.length) {
        setLetterIdx(letterIdx + 1);
      }
    }, 80);
  }, [typeText, letterIdx])

  useEffect(() => {
    setTimeout(() => {
      setTypeText(true);
    }, START_TEXT);
  }, []);

  const startWidth = 66;
  const endWidth = 66 + width + 10;

  const startViewBox = `0 -10 ${startWidth + 10} 80`
  const endViewBox = `0 -10 ${endWidth} 80`

  const pathStart = "M21.0534 4.44678L54.7238 4.44678L71.5462 33.4844L54.7215 62.524L21.0522 62.5244L4.22962 33.4851L21.0534 4.44678Z"
  const pathEnd = `M 21.0534 4.44678 
    L${VX1 + width} 4.44678
    L${VX2 + width} 33.4844
    L${VX3 + width} 62.524
    L21.0522 62.5244
    L4.22962 33.4851
    L21.0534 4.44678Z`

  return (
    <>
      <svg
        width={startWidth}
        height="76"
        viewBox={startViewBox}
        fill="none"
        className="hex-btn-svg"
        xmlns="http://www.w3.org/2000/svg"
      >
        <animate
          attributeName="viewBox"
          values={`${startViewBox};${endViewBox}`}
          dur={DURATION}
          begin={START_TIME}
          fill="freeze"
        />
        <animate
          attributeName="width"
          values={`${startWidth};${endWidth}`}
          dur={DURATION}
          begin={START_TIME}
          fill="freeze"
        />
        <text
          x="10" y="44"
          dominantBaseline="left"
          textAnchor="left"
          className="hex-btn-txt"
        >
          {'<'}<tspan className='btn-text'>{innerText}</tspan>{'/>'}
        </text>
        <g className="hex-btn-g">
          <path
            className="hex-btn-animated"
            d={pathStart}
            transform-origin="center"
          >
            <animate
              attributeName="d"
              values={`${pathStart};${pathEnd}`}
              dur={DURATION}
              begin={START_TIME}
              fill="freeze"
            />
          </path>
        </g>
      </svg>
    </>
  )
}

export default HexBtnAn;