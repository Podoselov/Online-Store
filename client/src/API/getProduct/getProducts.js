import axios from 'axios';

const getProducts = async (search = false, page = 1) => {
  if (search) {
    try {
      const response = await axios.get(
        `http://localhost:5000/products?_page=${page}&_limit=9&q=${search}`
      );
      return {
        data: response.data,
        totalCount: response.headers['x-total-count'],
      };
    } catch (error) {
      return console.log(error);
    }
  }
  try {
    const response = await axios.get(
      `http://localhost:5000/products?_page=${page}&_limit=9`
    );
    return {
      data: response.data,
      totalCount: response.headers['x-total-count'],
    };
  } catch (error) {
    return console.log(error);
  }
};

export default getProducts;
