import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import { LogIn, Register, HeaderPanel, HomePage } from './components';
import { Suspense, lazy } from 'react';

function App() {
  const Home = lazy(() => import('./components/HomePage'));

  return (
    <BrowserRouter>
      <div className="App">
        <div class="container">  
          <HeaderPanel />
          <Suspense fallback={'Loading...'}>
            <Home />
          </Suspense>
        </div>
      </div>
      <Routes>
        <Route path='home' element={<HomePage />}/> 
        <Route path='signin' element={<LogIn />} />
        <Route path='register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
