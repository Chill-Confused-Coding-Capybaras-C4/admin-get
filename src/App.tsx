import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FormPage } from './pages/FormPage';
import { Home } from './pages/Home';
import { TablePage } from './pages/Table';
// 


function App() {
  return (
    <BrowserRouter >
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/form' element={<FormPage />} />
            <Route path='/table' element={<TablePage />} />

          </Routes>
    </BrowserRouter>
  );
}

export default App;
