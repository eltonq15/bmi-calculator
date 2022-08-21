import { Routes, Route } from 'react-router-dom';
import { Home } from './view/Home';
import { Calculator } from './view/Calculator';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/bmi-calculator/' element={<Home />} />
        <Route path='/bmi-calculator/calculate' element={<Calculator />} />
      </Routes>
      App
    </div>
  );
}

export default App;
