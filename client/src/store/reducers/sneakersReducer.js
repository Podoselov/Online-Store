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
  REMOVE_CATEGORY,
  ADD_CATEGORY,
  ADD_PRICE_CATEGORY,
  REMOVE_BRAND_CATEGORY,
  ADD_BRAND_CATEGORY,
  ADD_STATUS_PRICE_CATEGORY,
  GET_MEN_PRODUCTS,
  GET_WOMEN_PRODUCTS,
  GET_KIDS_PRODUCTS,
  GET_CONVERSE_PRODUCTS,
  GET_JORDAN_PRODUCTS,
} from '../actions/actionsType';

const defaultState = {
  products: [],
  product: [],
  bag: [],
  favorites: [],
  category: { gender: [], price: '', brand: [], statusPrice: '' },
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
        category: { gender: [], price: '', brand: [], statusPrice: '' },
      };
    case GET_MEN_PRODUCTS:
      return {
        ...state,
        products: action.payload.data,
        totalCount: action.payload.totalCount,
        category: {
          gender: ['&category=men'],
          price: '',
          brand: [],
          statusPrice: '',
        },
      };
    case GET_WOMEN_PRODUCTS:
      return {
        ...state,
        products: action.payload.data,
        totalCount: action.payload.totalCount,
        category: {
          gender: ['&category=women'],
          price: '',
          brand: [],
          statusPrice: '',
        },
      };
    case GET_JORDAN_PRODUCTS:
      return {
        ...state,
        products: action.payload.data,
        totalCount: action.payload.totalCount,
        category: {
          gender: [],
          price: '',
          brand: ['Jordan'],
          statusPrice: '',
        },
      };
    case GET_CONVERSE_PRODUCTS:
      return {
        ...state,
        products: action.payload.data,
        totalCount: action.payload.totalCount,
        category: {
          gender: [],
          price: '',
          brand: ['Converse'],
          statusPrice: '',
        },
      };
    case GET_KIDS_PRODUCTS:
      return {
        ...state,
        products: action.payload.data,
        totalCount: action.payload.totalCount,
        category: {
          gender: ['&category=kids'],
          price: '',
          brand: [],
          statusPrice: '',
        },
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
    case ADD_CATEGORY:
      return {
        ...state,
        category: {
          ...state.category,
          gender: [...state.category.gender, action.payload],
        },
      };
    case REMOVE_CATEGORY:
      return {
        ...state,
        category: {
          ...state.category,
          gender: state.category.gender.filter(
            (element) => element !== action.payload
          ),
        },
      };
    case ADD_PRICE_CATEGORY:
      return {
        ...state,
        category: {
          ...state.category,
          price: action.payload,
        },
      };
    case ADD_BRAND_CATEGORY:
      return {
        ...state,
        category: {
          ...state.category,
          brand: [...state.category.brand, action.payload],
        },
      };
    case REMOVE_BRAND_CATEGORY:
      return {
        ...state,
        category: {
          ...state.category,
          brand: state.category.brand.filter(
            (element) => element !== action.payload
          ),
        },
      };
    case ADD_STATUS_PRICE_CATEGORY:
      return {
        ...state,
        category: {
          ...state.category,
          statusPrice: action.payload,
        },
      };

    default:
      return state;
  }
}
