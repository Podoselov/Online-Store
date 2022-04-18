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
  ADD_PRICE_CATEGORY,
  ADD_BRAND_CATEGORY,
  REMOVE_BRAND_CATEGORY,
  ADD_STATUS_PRICE_CATEGORY,
  REMOVE_STATUS_PRICE_CATEGORY,
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

export function searchProducts(
  search,
  genderCategory,
  priceCategory,
  brandCategory,
  statusPrice,
  page
) {
  return async (dispatch) => {
    const productsFromServer = await getSearchProducts(
      search,
      genderCategory,
      priceCategory,
      brandCategory,
      statusPrice,
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

export function removeBrandCategory(category) {
  return (dispatch) => {
    dispatch({
      type: REMOVE_BRAND_CATEGORY,
      payload: category,
    });
  };
}

export function addPriceCategory(category) {
  return (dispatch) => {
    dispatch({
      type: ADD_PRICE_CATEGORY,
      payload: category,
    });
  };
}

export function addBrandCategory(category) {
  return (dispatch) => {
    dispatch({
      type: ADD_BRAND_CATEGORY,
      payload: category,
    });
  };
}

export function addStatusPriceCategory(category) {
  return (dispatch) => {
    dispatch({
      type: ADD_STATUS_PRICE_CATEGORY,
      payload: category,
    });
  };
}

export function removeStatusPriceCategory(category) {
  return (dispatch) => {
    dispatch({
      type: REMOVE_STATUS_PRICE_CATEGORY,
      payload: category,
    });
  };
}
