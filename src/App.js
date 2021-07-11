
import Intro from './sections/Intro';

import './styles.scss';

function App() {
  return (
    <div className="app" style={{height: '100%'}}>
      <Intro />
      <div className="content" style={{height: 3000}}>
        Some other really important stuff that you should definitely read.
      </div>
    </div>
  );
}

export default App;
