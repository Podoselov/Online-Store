import { PRODUCTS, PRODUCT } from './actionsType';
import getProducts from '../../API/getProduct/getProducts';

export function getAllProducts() {
  return async (dispatch, getState) => {
    const { products } = getState();
    if (products.products.length === 0) {
      const productsFromServer = await getProducts(`products`);
      dispatch({
        type: PRODUCTS,
        payload: productsFromServer,
      });
    }
  };
}

export function getProduct(product) {
  return (dispatch) => {
    dispatch({
      type: PRODUCT,
      payload: product,
    });
  };
}
