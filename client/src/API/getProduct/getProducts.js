const getProducts = async (path) => {
  try {
    const response = await fetch(`http://localhost:5000/${path}`);
    const productsRespons = await response.json();
    return productsRespons;
  } catch (error) {
    return console.log(error);
  }
};

export default getProducts;
