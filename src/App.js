import './App.css';
import CarsList from './CarsList';
import { useState, useEffect } from 'react';
import { getCars } from './services/fetch-utils';
// import your arrays here
function App() {

  const [cars, setCars] = useState([]);
  return (
    <div className="App">
        
    </div>
  );
}

export default App;
