import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import sneakersReducer from './sneakersReducer';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  sneakers: sneakersReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
