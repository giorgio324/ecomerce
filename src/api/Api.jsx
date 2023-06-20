import axios from 'axios';

export async function productsData() {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
  } catch (error) {
    console.error('Error fetching products data:', error);
    return null; // or return an empty array: []
  }
}
