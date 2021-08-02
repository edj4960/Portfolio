import React from 'react';

const ANIM_DELAY = 1000;
const ANIM_LENGTH_DUR = 250;
const ANIM_WIDTH_DUR = 250;

const ProjectAccent = ({ width }) => {
    return (
        <svg viewBox="0 0 40 2" xmlns="http://www.w3.org/2000/svg">
            <line
                x1="0"
                y1="0"
                xs={width || "100%"}
                y2="0"
                stroke="white"
                stroke-width=".5"
            >
                <animate
                    attributeName="x2"
                    values={`0; ${width || "100%"}`}
                    dur={`${ANIM_LENGTH_DUR}ms`}
                    repeatCount="indefinite"
                    repeatCount="1"
                    calcMode="spline"
                    begin={`${ANIM_DELAY}ms`}
                    keySplines="
                        0.42 0 0.36 1;"
                    // keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
                    keyTimes="0;1"
                    fill="freeze"
                />
                <animate
                    attributeName="stroke-width"
                    begin={`${ANIM_DELAY + ANIM_LENGTH_DUR}ms`}
                    values=".5;1;"
                    dur={`${ANIM_WIDTH_DUR}ms`}
                    repeatCount="indefinite"
                    repeatCount="1"
                    fill="freeze"
                />
            </line>
        </svg>
    )
}

export default ProjectAccent;