import { PRODUCTS } from './actionsType';
import getProducts from '../../API/getProduct/getProducts';

export function getAllProducts() {
  return async (dispatch, getState) => {
    const { sneakers } = getState();
    if (Object.keys(sneakers).length === 0) {
      const productsFromServer = await getProducts(`products`);
      dispatch({
        type: PRODUCTS,
        payload: productsFromServer,
      });
    }
  };
}
