import { PRODUCTS } from '../actions/actionsType';

const defaultState = {
  all: [],
};

export default function sneakersReducer(state = defaultState, action) {
  switch (action.type) {
    case PRODUCTS:
      return { ...state, all: action.payload };
    default:
      return state;
  }
}
