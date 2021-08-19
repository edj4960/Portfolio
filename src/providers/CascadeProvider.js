import React, { useState, createContext, useEffect } from 'react'

const CascadeContext = createContext({
  index: 0
});

const CascadeProvider = props => {
  const [index, setIndex] = useState(0);
  const [timeout, setNewTimeout] = useState(5250 - 5000);
  const maxIndex = 100;

  useEffect(() => {
    setTimeout(() => {
      if (index > maxIndex) return;

      setIndex(index + 1);
    }, timeout);
    setNewTimeout(250);
  }, [index]);

  return (
    <CascadeContext.Provider
      value={{
        index
      }}
    >
      {props.children}
    </CascadeContext.Provider>
  );
}

export { CascadeProvider, CascadeContext };