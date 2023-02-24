import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import { LogIn, Register, HeaderPanel, HomePage } from './components';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div class="container">  
          <HeaderPanel />
          <HomePage />
          
        </div>
      </div>
      <Routes>
        <Route path='signin' element={<LogIn />} />
        <Route path='register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
