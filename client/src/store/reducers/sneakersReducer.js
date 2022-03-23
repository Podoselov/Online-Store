import { PRODUCTS, PRODUCT } from '../actions/actionsType';

const defaultState = {
  products: [],
};

export default function sneakersReducer(state = defaultState, action) {
  switch (action.type) {
    case PRODUCTS:
      return { ...state, products: action.payload };
    case PRODUCT:
      return {
        ...state,
        product: state.products.filter(
          (element) => element.idProduct === action.payload
        ),
      };
    default:
      return state;
  }
}
