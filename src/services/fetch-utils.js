import { checkError, client } from './client';

export async function getCars() {
  const response = await client
    .from('cars')
    .select();
  return checkError(response);
}
export async function getPizzas() {
  const response = await client
    .from('pizzas')
    .select();
  return checkError(response);
}
export async function getDogs() {
  const response = await client
    .from('dogs')
    .select();
  return checkError(response);
}
export async function getCocktails() {
  const response = await client
    .from('cocktails')
    .select();
  return checkError(response);
}


