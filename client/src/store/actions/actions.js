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
  SEARCH_PRODUCTS,
  POPULAR_PRODUCT,
  ALL_PRODUCTS,
} from './actionsType';
import getProducts from '../../API/getProduct/getProducts';
import getSearchProducts from '../../API/getProduct/getSearchProducts';

export function getAllProducts(search, page) {
  return async (dispatch, getState) => {
    const { products } = getState();
    if (products.products.length === 0) {
      const productsFromServer = await getProducts(search, page);
      dispatch({
        type: PRODUCTS,
        payload: productsFromServer,
      });
    }
  };
}

export function getAllProductsFromServer(page) {
  return async (dispatch) => {
    const productsFromServer = await getProducts(page);
    dispatch({
      type: ALL_PRODUCTS,
      payload: productsFromServer,
    });
  };
}

export function searchProducts(search, genderCategory, page) {
  return async (dispatch) => {
    const productsFromServer = await getSearchProducts(
      search,
      genderCategory,
      page
    );
    dispatch({
      type: SEARCH_PRODUCTS,
      payload: productsFromServer,
    });
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

export function getPopularProduct(idProduct) {
  return (dispatch) => {
    dispatch({
      type: POPULAR_PRODUCT,
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
