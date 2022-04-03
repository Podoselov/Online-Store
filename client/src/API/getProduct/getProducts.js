import axios from 'axios';

const getProducts = async (page = 1, category) => {
  console.log(category);
  try {
    if (category) {
      const responseCategory = await axios.get(
        `http://localhost:5000/products?_page=${page}&_limit=9&category=${category}`
      );
      return responseCategory.data;
    }
    const response = await axios.get(
      `http://localhost:5000/products?_page=${page}&_limit=9`
    );

    return response.data;
  } catch (error) {
    return console.log(error);
  }
};

export default getProducts;
