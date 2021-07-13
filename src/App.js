
import Intro from './sections/Intro';
import NavBar from './components/NavBar';
import MyWork from './sections/MyWork';
import About from './sections/About';

import './styles.scss';

function App() {
  return (
    <div className="app" style={{height: '100%'}}>
      <Intro />
      <NavBar/>
      <About/>
      {/* <div style={{height: 500}} /> */}
      <MyWork />
    </div>
  );
}

export default App;
