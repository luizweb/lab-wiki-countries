
import './App.css';
import countries from './countries.json';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {

  const [allCountries, setAllCountries] = useState(countries); 
  
  return (
    <div className="App">
    
      <Navbar />

      <div className="container-fluid border m-0">
        <div className="row">

          <div className="col-auto" style={{ "maxHeight": "100vh", "overflow": "scroll" }}>
            <CountriesList allCountries={allCountries} />
          </div>

          <div className="col">
          <Routes>
            <Route path="country/:countryID" element={ <CountryDetails allCountries={allCountries} /> } />
          </Routes>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
