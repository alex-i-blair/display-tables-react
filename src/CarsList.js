import React from 'react';

export default function CarsList({ cars }) {
  return cars.map((car, i) => <div key={car + i}>
    <h2>{`${car.year} ${car.make} ${car.model}`}</h2>
    <img className='car-image' src={`${car.image_id}.jpeg`} />
    <p>{car.details}</p>
  </div>);
}
