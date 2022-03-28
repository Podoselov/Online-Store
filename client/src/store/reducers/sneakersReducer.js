import { PRODUCTS, PRODUCT, BAG, REMOVE } from '../actions/actionsType';

const defaultState = {
  products: [],
  product: [],
  bag: [],
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
    case BAG:
      return {
        ...state,
        bag: [...state.bag, action.payload],
      };
    case REMOVE:
      return {
        ...state,
        bag: state.bag.filter((element) => element.name !== action.payload),
      };

    default:
      return state;
  }
}
