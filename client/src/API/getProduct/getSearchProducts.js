import axios from 'axios';

const getSearchProducts = async (search, page = 1) => {
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
};

export default getSearchProducts;
