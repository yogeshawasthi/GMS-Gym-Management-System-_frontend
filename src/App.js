import './App.css';
import Dashboard from './Pages/Home/Dashboard/dashboard.js';

import Home from './Pages/Home/home';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
