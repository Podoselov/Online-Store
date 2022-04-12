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
  REGISTRATION_ROUTE,
  LOGIN,
} from '../utils/consts';
import HomePage from '../HomePage/HomePage';
import store, { persistor } from '../../store/store';
import FavoritesPage from '../FavoritesPage/FavoritesPage';
import ProductsPage from '../ProductsPage/ProductsPage';
import ProductPage from '../ProductPage/ProductPage';
import RegistrationPage from '../RegistrationPage/RegistrationPage';
import BuyPage from '../BuyPage/BuyPage';
import HeaderComponent from '../../components/headerComponent/HeaderComponent';
import FooterComponent from '../../components/footerComponent/FooterComponent';
import LoginPage from '../LoginPage/LoginPage';

function AppRoutes() {
  return (
    <Provider store={store}>
      <CssBaseline />
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <HeaderComponent />
          <Routes>
            <Route path={FAVORITES_ROUTE} element={<FavoritesPage />} />
            <Route path={PRODUCTS_ROUTE} element={<ProductsPage />} />
            <Route path={PRODUCT_ROUTE} element={<ProductPage />} />
            <Route path={REGISTRATION_ROUTE} element={<RegistrationPage />} />
            <Route path={LOGIN} element={<LoginPage />} />
            <Route path={BUY_ROUTE} element={<BuyPage />} />
            <Route index element={<HomePage />} />
            <Route path={REDIRECT_ROUTE} element={<HomePage />} />
          </Routes>
          <FooterComponent />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default AppRoutes;
