import {
  PRODUCTS,
  PRODUCT,
  BAG,
  REMOVE,
  ADD_FAVORITES,
  REMOVE_FAVORITES,
} from './actionsType';
import getProducts from '../../API/getProduct/getProducts';

export function getAllProducts() {
  return async (dispatch, getState) => {
    const { products } = getState();
    if (products.products.length === 0) {
      const productsFromServer = await getProducts();
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

export function setProductBag(product) {
  return (dispatch) => {
    dispatch({
      type: BAG,
      payload: product,
    });
  };
}

export function removeProductBag(product) {
  return (dispatch) => {
    dispatch({
      type: REMOVE,
      payload: product,
    });
  };
}

export function addFavoritesCard(product) {
  return (dispatch) => {
    dispatch({
      type: ADD_FAVORITES,
      payload: product,
    });
  };
}

export function removeFavoritesCard(product) {
  return (dispatch) => {
    dispatch({
      type: REMOVE_FAVORITES,
      payload: product,
    });
  };
}
