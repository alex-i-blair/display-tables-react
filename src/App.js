import './App.css';
import CarsList from './CarsList';
import { useState, useEffect } from 'react';
import { getCars } from './services/fetch-utils';
// import your arrays here
function App() {

  const [cars, setCars] = useState([]);
  const [isLoading, setLoading] = useState(false);
  
  async function fetchData() {
    setLoading(true);
    const data = await getCars();

    setLoading(false);
    setCars(data);
  }

  useEffect(() => {
    fetchData();
    
  }, []);

  return (
    <div className="App">
      <h3>Cars:</h3>
      {
        isLoading
          ? <h2>Loading</h2>
          : <CarsList cars={cars}
          />
      } 
    </div>
  );
}

export default App;
