import axios from 'axios';

const getProducts = async (page) => {
  try {
    const response = await axios.get(
      `http://localhost:5000/products?_page=${page}&_limit=9`
    );
    return response.data;
  } catch (error) {
    return console.log(error);
  }
};

export default getProducts;
