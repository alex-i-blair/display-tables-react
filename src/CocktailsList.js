import React from 'react';

export default function CocktailsList({ cocktails }) {
  return cocktails.map((cocktail, i) =>
    <div className='cocktail-card' key={cocktail + i}>
      <img src={cocktail.image_id} />
      <h2>{cocktail.name}</h2>
      <p>{cocktail.ingredients}</p>
      <p>Where to get one in Portland: {cocktail.where}</p>
    </div>
  
  ); 
}
