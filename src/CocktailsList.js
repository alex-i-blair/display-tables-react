import React from 'react';

export default function CocktailsList({ cocktails }) {
  return cocktails.map((cocktail, i) =>
    <div key={cocktail + i}>
      <img src={cocktail.image_id} />
      <h2>{cocktail.name}</h2>
      <p>{cocktail.ingredients}</p>
    </div>
  
  ); 
}
