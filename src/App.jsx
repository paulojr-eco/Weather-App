//imports do React
import React, { useState } from 'react';

//imports de estilos
import './App.css';

//imports dos componentes
import Search from './components/Search';
import City from './components/City';

const App = () =>{

  const [cities, setCities] = useState([
    { 
      name: 'Pedralva',
      country: 'Brasil',
      temperature: 19,
      humidity: 93, 
      weather: 'Chuva Forte'
    },
    { 
      name: 'Itajubá',
      country: 'Brasil',
      temperature: 19,
      humidity: 93, 
      weather: 'Chuva Forte'
    }
  ]);

  return(
    <div className="container">
      <Search />
      <City cities = {cities} />
    </div>
  );
};
export default App;