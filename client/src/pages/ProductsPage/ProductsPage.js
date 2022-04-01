import React from 'react';
import { Container } from '@mui/material';
import ProductsComponent from './productsComponent/ProductsComponent';

function ProductsPage() {
  return (
    <Container minwidth='sm' maxWidth='1800px'>
      <ProductsComponent />
    </Container>
  );
}

export default ProductsPage;
