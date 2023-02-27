import { useEffect, useState } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import { LogIn, Register, HeaderPanel, HomePage } from './components';
import axios from 'axios';

function App() {
  const [state, setState] = useState({
    ip: "",
    countryName: "",
    countryCode: "",
    city: "",
    timezone: ""
  });

  const getGeoInfo = () => {
    axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        let data = response.data;
        setState({
          ...state,
          ip: data.ip,
          countryName: data.country_name,
          countryCode: data.country_calling_code,
          city: data.city,
          timezone: data.timezone
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getGeoInfo();
  }
  );

  return (
    <BrowserRouter>
      <div className="App">
        <div class="container">  
          <HeaderPanel />
          
        </div>
      </div>
      <Routes>
        <Route path='home' element={<HomePage city={state.city}/>}/> 
        <Route path='signin' element={<LogIn />} />
        <Route path='register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
