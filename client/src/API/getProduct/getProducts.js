const getProducts = async (path) => {
  try {
    const response = await fetch(`http://localhost:5001/${path}`);
    const productsRespons = await response.json();
    console.log(productsRespons);
    return productsRespons;
  } catch (error) {
    return console.log(error);
  }
};

export default getProducts;
