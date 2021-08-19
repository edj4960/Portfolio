import React, { useContext, useEffect, useState } from 'react';

import { CascadeContext } from '../providers/CascadeProvider';

import './Cascade.scss'

const Cascade = ({
  top, bottom, left, right,
  fade,
  showIndex,
  className,
  children,
  style,
}) => {
  const { index } = useContext(CascadeContext);
  const [show, setShow] = useState(false);
  const delay = 50 * showIndex + 5000;

  const classes = `cascade ${fade ? 'fade-in' : ''} ${top ? 'top' : ''} ${bottom ? 'bottom' : ''}`
  const styles = {
    height: '100%',
    ...style
  }

  useEffect(() => {
    if (index >= showIndex) {
      setShow(true);
    }
  }, [index]);

  return (
    <>
      <div
        className={className}
        style={styles}
      >
        {
          show &&
          <div
            className={classes}
            style={{ height: '100%' }}
          // style={{
          //   animationDelay: `${delay}ms`
          // }}
          >
            {children}
          </div>
        }
      </div>
    </>
  )
}

export default Cascade;