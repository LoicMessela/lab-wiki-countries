import './App.css';
import countries from "./countries.json"
import { useEffect, useState } from 'react';
import CountriesList from './Components/CountriesList';
import CountryDetails from './Components/CountryDetails';
import { Link, Route, Routes, useParams } from 'react-router-dom';

function App() {
  const [list, setList] = useState([])


  useEffect(() => {
    fetch('https://ih-countries-api.herokuapp.com/countries')
      .then(response => response.json())
      .then(countries => setList(countries))
  }, [])
  return (
    <div className="App">

      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <Link className="navbar-brand" to="/">WikiCountries</Link>
        </div>
      </nav>
      <div className="container">

        <div className="row">
          <CountriesList countriesDisplay={list} />
          <Routes>
            <Route path="/:code" element={<CountryDetails countries={countries} />} />

          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
