
import Intro from './sections/Intro';
import NavBar from './components/NavBar';
import Examples from './sections/Examples';

import './styles.scss';

function App() {
  return (
    <div className="app" style={{height: '100%'}}>
      <Intro />
      <NavBar/>
      <div style={{height: 1000}} />
      {/* <Examples /> */}
    </div>
  );
}

export default App;
