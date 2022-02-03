import React from 'react';

export default function PizzasList({ pizzas }) {
  return pizzas.map((pizza, i) => 
    <div className='pizza-card' key={pizza + i}>
      <img src={pizza.image_id} />
      <h2>{pizza.type}</h2>
      <p>The crust: {pizza.crust}</p>
      <p>Where to get one in Portland: {pizza.where}</p>
    </div>);
}
