import React from 'react';

export default function PizzasList({ pizzas }) {
  return pizzas.map((pizza, i) => 
    <div key={pizza + i}>
      <img src={pizza.image_id} />
      <h2></h2>
    </div>);
}
