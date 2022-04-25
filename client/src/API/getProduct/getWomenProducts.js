import axios from 'axios';

const getWomenProducts = async (page = 1) => {
  try {
    const response = await axios.get(
      `http://localhost:5000/products?category=women&_page=${page}&_limit=9`
    );
    return {
      data: response.data,
      totalCount: response.headers['x-total-count'],
    };
  } catch (error) {
    return console.log(error);
  }
};

export default getWomenProducts;
