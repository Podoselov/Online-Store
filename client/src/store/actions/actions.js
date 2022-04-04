import {
  PRODUCTS,
  PRODUCT,
  BAG,
  REMOVE,
  ADD_FAVORITES,
  REMOVE_FAVORITES,
  FAVORITES_PRODUCT,
  ADD_CATEGORY,
  REMOVE_CATEGORY,
} from './actionsType';
import getProducts from '../../API/getProduct/getProducts';

export function getAllProducts(page, search) {
  return async (dispatch) => {
    const productsFromServer = await getProducts(page, search);
    dispatch({
      type: PRODUCTS,
      payload: productsFromServer,
    });
  };
}

export function getProduct(idProduct) {
  return (dispatch) => {
    dispatch({
      type: PRODUCT,
      payload: idProduct,
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

export function getProductFavorites(product) {
  return (dispatch) => {
    dispatch({
      type: FAVORITES_PRODUCT,
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

export function addCategory(category) {
  return (dispatch) => {
    dispatch({
      type: ADD_CATEGORY,
      payload: category,
    });
  };
}

export function removeCategory(category) {
  return (dispatch) => {
    dispatch({
      type: REMOVE_CATEGORY,
      payload: category,
    });
  };
}
