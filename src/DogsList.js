export default function DogsList({ dogs }) {
  return dogs.map((dog, i) =>
    <div key={dog + i}>
      <h2>{dog.name}</h2>
      <p>Age: {dog.age}</p>
      <p>Breed: {dog.breed}</p>
      <p>Temperament: {dog.temperament}</p>
    </div>
  
  ); 
}