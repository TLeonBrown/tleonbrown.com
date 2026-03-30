import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { Credits } from './Credits';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/credits" element={<Credits />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
