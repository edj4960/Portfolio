import React, { useState, useEffect } from 'react';

import Intro from './sections/Intro';
import NavBar from './components/NavBar';
import MyWork from './sections/MyWork';
import About from './sections/About';
import Logo from './components/Logo';
import { CascadeProvider } from './providers/CascadeProvider';

import './styles.scss';

function App() {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowLogo(false);
    }, 5000)
  }, [])

  return (
    <CascadeProvider>
      <div className="app" style={{ height: '100%' }}>
        {
          showLogo ?
            <Logo />
            :
            <>
              <Intro />
              <NavBar />
              <About />
              <MyWork />
            </>
        }
      </div>
    </CascadeProvider>
  );
}

export default App;
