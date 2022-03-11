import thunk from 'redux-thunk';
import persistStore from 'redux-persist/es/persistStore';
import { createStore, applyMiddleware, compose } from 'redux';
import persistedReducer from './reducers/reducer';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(persistedReducer, enhancer);
const persistor = persistStore(store);

export { persistor };
export default store;
