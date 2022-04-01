import axios from 'axios';

const getProducts = async () => {
  try {
    const response = await axios.get(`http://localhost:5000/products`);
    return response.data;
  } catch (error) {
    return console.log(error);
  }
};

export default getProducts;
