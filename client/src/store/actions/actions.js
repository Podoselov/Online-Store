import { PRODUCTS } from './actionsType';
import getProducts from '../../API/getProduct/getProducts';

export function getAllProducts() {
  return async (dispatch, getState) => {
    const { sneakers } = getState();
    if (sneakers.all.length === 0) {
      const productsFromServer = await getProducts(`sneakers`);
      dispatch({
        type: PRODUCTS,
        payload: productsFromServer,
      });
    }
  };
}
