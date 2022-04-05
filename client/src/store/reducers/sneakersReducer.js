import {
  PRODUCTS,
  PRODUCT,
  BAG,
  REMOVE,
  ADD_FAVORITES,
  REMOVE_FAVORITES,
  FAVORITES_PRODUCT,
  SEARCH_PRODUCTS,
  POPULAR_PRODUCT,
  ALL_PRODUCTS,
} from '../actions/actionsType';

const defaultState = {
  products: [],
  product: [],
  bag: [],
  favorites: [],
  category: [],
  popular: [],
};

export default function sneakersReducer(state = defaultState, action) {
  switch (action.type) {
    case PRODUCTS:
      return {
        ...state,
        products: action.payload.data,
        totalCount: action.payload.totalCount,
        popular: action.payload.data.filter((element) => element.urlImg),
      };
    case ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload.data,
        totalCount: action.payload.totalCount,
        popular: action.payload.data.filter((element) => element.urlImg),
      };
    case SEARCH_PRODUCTS:
      return {
        ...state,
        products: action.payload.data,
        totalCount: action.payload.totalCount,
      };
    case PRODUCT:
      return {
        ...state,
        product: state.products.filter(
          (element) => element.idProduct === action.payload
        ),
      };
    case POPULAR_PRODUCT:
      return {
        ...state,
        product: state.popular.filter(
          (element) => element.idProduct === action.payload
        ),
      };
    case BAG:
      return {
        ...state,
        bag: [...state.bag, action.payload],
      };
    case REMOVE:
      return {
        ...state,
        bag: state.bag.filter(
          (element) => element.idProduct !== action.payload.idProduct
        ),
      };
    case ADD_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case FAVORITES_PRODUCT:
      return {
        ...state,
        product: state.favorites.filter(
          (element) => element.idProduct === action.payload.idProduct
        ),
      };
    case REMOVE_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter(
          (element) => element.idProduct !== action.payload
        ),
      };

    default:
      return state;
  }
}
