import { json } from '@sveltejs/kit';

export async function load({ fetch }) {
  try {
    const res = await fetch('https://dummyjson.com/products');
    console.log(res.body)
    const categoriesData = await res.json();
    return {
      data: categoriesData,
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      data: [],
    };
  }
}


