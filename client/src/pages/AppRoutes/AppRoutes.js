import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import {
  REDIRECT_ROUTE,
  FAVORITES_ROUTE,
  PRODUCTS_ROUTE,
  PRODUCT_ROUTE,
  BUY_ROUTE,
  HOME_ROUTE,
  REGISTRATION_ROUTE,
} from '../utils/consts';
import HomePage from '../HomePage/HomePage';
import store, { persistor } from '../../store/store';
import FavoritesPage from '../FavoritesPage/FavoritesPage';
import ProductsPage from '../ProductsPage/ProductsPage';
import ProductPage from '../ProductPage/ProductPage';
import RegistrationPage from '../RegistrationPage/RegistrationPage';
import BuyPage from '../BuyPage/BuyPage';
import HeaderComponent from '../../components/headerComponent/HeaderComponent';

function AppRoutes() {
  return (
    <Provider store={store}>
      <CssBaseline />
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <HeaderComponent />
          <Routes>
            <Route exact path={FAVORITES_ROUTE} element={<FavoritesPage />} />
            <Route exact path={PRODUCTS_ROUTE} element={<ProductsPage />} />
            <Route exact path={PRODUCT_ROUTE} element={<ProductPage />} />
            <Route
              exact
              path={REGISTRATION_ROUTE}
              element={<RegistrationPage />}
            />
            <Route exact path={BUY_ROUTE} element={<BuyPage />} />
            <Route exact path={HOME_ROUTE} element={<HomePage />} />
            <Route path={REDIRECT_ROUTE} element={<HomePage />} />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default AppRoutes;
