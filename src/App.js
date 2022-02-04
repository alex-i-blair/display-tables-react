import './App.css';
import CarsList from './CarsList';
import PizzasList from './PizzasList';
import DogsList from './DogsList';
import CocktailsList from './CocktailsList';
import { useState, useEffect } from 'react';
import { getCars, getCocktails, getDogs, getPizzas } from './services/fetch-utils';

// import your arrays here
function App() {

  const [cars, setCars] = useState([]);
  const [pizzas, setPizzas] = useState([]);
  const [dogs, setDogs] = useState([]);
  const [cocktails, setCocktails] = useState([]);

  const [isLoading, setLoading] = useState(false);
  
  async function fetchData() {
    setLoading(true);
    const dataCars = await getCars();
    const dataPizzas = await getPizzas();
    const dataDogs = await getDogs();
    const dataCocktails = await getCocktails();

    setLoading(false);
    setCars(dataCars);
    setPizzas(dataPizzas);
    setDogs(dataDogs);
    setCocktails(dataCocktails);
  }

  useEffect(() => {
    fetchData();
    
  }, []);

  return (
    <div className="App">
      <h1>Cars:</h1>
      {
        isLoading
          ? <h2>Loading</h2>
          : <CarsList cars={cars}
          />
      } 
      <h1>Pizzas:</h1>
      {
        isLoading
          ? <h2>Loading</h2>
          : <PizzasList pizzas={pizzas}
          />
      } 
      <h1>Dogs:</h1>
      {
        isLoading
          ? <h2>Loading</h2>
          : <DogsList dogs={dogs}
          />
      } 
      <h1>Cocktails:</h1>
      {
        isLoading
          ? <h2>Loading</h2>
          : <CocktailsList cocktails={cocktails}
          />
      } 
    </div>
  );
}

export default App;
