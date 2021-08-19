import React, { Children } from 'react';

import './HexBtn.scss';

const HexBtn = ({
  onClick,
  center,
  customStyles,
  children,
  logo,
  animated
}) => {

  const styles = {
    textAlign: center ? 'center' : 'left',

    ...customStyles
  }

  // styles.margin = "0 auto";

  return (
    <div
      style={styles}
      className="hex-btn-div"
    >
      <button
        className="hex-btn"
      >
        {/* <div
          className={"hex-btn-inner"}
        > */}
        {children}
        {/* </div> */}
      </button>
    </div>
  )
}

export default HexBtn;

