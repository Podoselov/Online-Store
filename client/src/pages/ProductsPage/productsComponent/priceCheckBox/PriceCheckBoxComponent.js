import React, { useState, useEffect } from 'react';
import { PriceBox } from './stylesPriseCheckBox';
import { FormControlLabel, RadioGroup, Radio } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addStatusPriceCategory } from '../../../../store/actions/actions';
import { useSearchParams, useNavigate } from 'react-router-dom';

const PriceCheckBoxComponent = () => {
  const [statusPrice, setStatusPrice] = useState('');

  let [params] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const priceLink = (firstPrice, secondPrice) => {
    let isActiveFirstPrice = params
      .getAll('currentPrice_gte')
      .includes(firstPrice);

    let isActiveSecondPrice = params
      .getAll('currentPrice_lte')
      .includes(secondPrice);

    if (!isActiveFirstPrice) {
      params.set('currentPrice_gte', firstPrice);
      params.delete('currentPrice_lte');
      if (!isActiveSecondPrice) {
        if (secondPrice) params.set('currentPrice_lte', secondPrice);
      }
      params.delete('_page');
      params.set('_page', 1);
    } else {
      params = new URLSearchParams(
        Array.from(params).filter(
          ([key, value]) => key !== 'currentPrice_gte' || value !== firstPrice
        )
      );
      if (isActiveSecondPrice) {
        params = new URLSearchParams(
          Array.from(params).filter(
            ([key, value]) =>
              key !== 'currentPrice_lte' || value !== secondPrice
          )
        );
      }
    }

    return params.toString();
  };

  const currentPriceGte = params.get('currentPrice_gte');
  const currentPriceLte = params.get('currentPrice_lte');

  const addActiveRadio = () => {
    if (currentPriceGte || currentPriceLte) {
      if (currentPriceGte === '0' && currentPriceLte === '25') {
        return setStatusPrice('currentPrice_gte=0&currentPrice_lte=25');
      }
      if (currentPriceGte === '25' && currentPriceLte === '50') {
        return setStatusPrice('currentPrice_gte=25&currentPrice_lte=50');
      }
      if (currentPriceGte === '50' && currentPriceLte === '100') {
        return setStatusPrice('currentPrice_gte=50&currentPrice_lte=100');
      }
      if (currentPriceGte === '100' && currentPriceLte === '150') {
        return setStatusPrice('currentPrice_gte=100&currentPrice_lte=150');
      }
      if (currentPriceGte === '150') {
        return setStatusPrice('currentPrice_gte=150');
      }
    }
    return setStatusPrice('');
  };

  useEffect(() => {
    addActiveRadio();
  }, [currentPriceGte, currentPriceLte]);

  const changeBoxValue = async (value, priceGte, priceLte) => {
    setStatusPrice(value);
    dispatch(addStatusPriceCategory(value));
    navigate(`?${priceLink(priceGte, priceLte)}`);
  };

  return (
    <PriceBox>
      <p>Shop by Price</p>
      <RadioGroup>
        <FormControlLabel
          control={
            <Radio
              checked={statusPrice === 'currentPrice_gte=0&currentPrice_lte=25'}
              value='currentPrice_gte=0&currentPrice_lte=25'
              onChange={(e) => {
                changeBoxValue(e.target.value, '0', '25');
              }}
              color='default'
            />
          }
          label='$0 - $25'
        />
        <FormControlLabel
          control={
            <Radio
              checked={
                statusPrice === 'currentPrice_gte=25&currentPrice_lte=50'
              }
              value='currentPrice_gte=25&currentPrice_lte=50'
              onChange={(e) => {
                changeBoxValue(e.target.value, '25', '50');
              }}
              color='default'
            />
          }
          label='$25 - $50'
        />
        <FormControlLabel
          control={
            <Radio
              checked={
                statusPrice === 'currentPrice_gte=50&currentPrice_lte=100'
              }
              value='currentPrice_gte=50&currentPrice_lte=100'
              onChange={(e) => {
                changeBoxValue(e.target.value, '50', '100');
              }}
              color='default'
            />
          }
          label='$50 - $100'
        />
        <FormControlLabel
          control={
            <Radio
              checked={
                statusPrice === 'currentPrice_gte=100&currentPrice_lte=150'
              }
              value='currentPrice_gte=100&currentPrice_lte=150'
              onChange={(e) => {
                changeBoxValue(e.target.value, '100', '150');
              }}
              color='default'
            />
          }
          label='$100 - $150'
        />
        <FormControlLabel
          control={
            <Radio
              checked={statusPrice === 'currentPrice_gte=150'}
              value='currentPrice_gte=150'
              onChange={(e) => {
                changeBoxValue(e.target.value, '150');
              }}
              color='default'
            />
          }
          label='Over $150'
        />
      </RadioGroup>
    </PriceBox>
  );
};

export default PriceCheckBoxComponent;
