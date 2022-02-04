import React from 'react';

export default function CarsList({ cars }) {
  return cars.map((car, i) => 
    <div className='car-card' key={car + i}>
      <h2>{`${car.year} ${car.make} ${car.model}`}</h2>
      <img src={`${car.image_id}.jpeg`} />
      <p>{car.details}</p>
    </div>);
}
