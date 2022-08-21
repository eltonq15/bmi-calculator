import { Routes, Route } from 'react-router-dom';
import { Home } from './view/Home';
import { Calculator } from './view/Calculator';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route exact path='/home' element={<Home />} />
        <Route path='/calculate' element={<Calculator />} />
      </Routes>
    </div>
  );
}

export default App;
