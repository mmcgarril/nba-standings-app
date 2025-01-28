import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Standings from './pages/Standings';


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/standings/east' element={<Standings conference={'east'}/>} />
          <Route path='/standings/west' element={<Standings conference={'west'}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
