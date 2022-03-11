import React from 'react';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../store/actions/actions';

function ProductsPage() {
  const dispatch = useDispatch();

  const stateProducts = useSelector((state) => state.sneakers.all);

  const getProducts = useCallback(async () => {
    return dispatch(getAllProducts());
  }, []);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <div>
      {stateProducts.map(({ name, id }) => {
        return <h2 key={id}>{name}</h2>;
      })}
      <h1>Products</h1>
    </div>
  );
}

export default ProductsPage;
