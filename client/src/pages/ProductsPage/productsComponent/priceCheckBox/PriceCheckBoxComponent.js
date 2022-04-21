import React, { useState, useEffect } from 'react';
import { PriceBox } from './stylesPriseCheckBox';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeStatusPriceCategory,
  addStatusPriceCategory,
} from '../../../../store/actions/actions';
import { useSearchParams, useNavigate } from 'react-router-dom';

const PriceCheckBoxComponent = () => {
  const [statusPriceXS, setStatusPriceXS] = useState(false);
  const [statusPriceS, setStatusPriceS] = useState(false);
  const [statusPriceSM, setStatusPriceSM] = useState(false);
  const [statusPriceM, setStatusPriceM] = useState(false);
  const [statusPriceL, setStatusPriceL] = useState(false);

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
      params.append('currentPrice_gte', firstPrice);
      params.delete('_page');
      params.set('_page', 1);
      if (!isActiveSecondPrice) {
        if (secondPrice) params.append('currentPrice_lte', secondPrice);
      }
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

  const addActiveCheckBox = () => {
    if (currentPriceGte || currentPriceLte) {
      if (currentPriceGte === '0' && currentPriceLte === '25') {
        return setStatusPriceXS(true);
      }
      if (currentPriceGte === '25' && currentPriceLte === '50') {
        return setStatusPriceS(true);
      }
      if (currentPriceGte === '50' && currentPriceLte === '100') {
        return setStatusPriceSM(true);
      }
      if (currentPriceGte === '100' && currentPriceLte === '150') {
        return setStatusPriceM(true);
      }
      if (currentPriceGte === '150') {
        return setStatusPriceL(true);
      }
    }
    return (
      setStatusPriceXS(false),
      setStatusPriceS(false),
      setStatusPriceSM(false),
      setStatusPriceM(false),
      setStatusPriceL(false)
    );
  };

  useEffect(() => {
    addActiveCheckBox();
  }, [currentPriceGte, currentPriceLte]);

  const changeBoxValue = async (state, setState, value, priceGte, priceLte) => {
    setState(!state);
    state
      ? dispatch(removeStatusPriceCategory(value))
      : dispatch(addStatusPriceCategory(value));

    navigate(`?${priceLink(priceGte, priceLte)}`);
  };

  return (
    <PriceBox>
      <p>Shop by Price</p>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={statusPriceXS}
              value='currentPrice_gte=00&currentPrice_lte=25'
              onChange={(e) => {
                changeBoxValue(
                  statusPriceXS,
                  setStatusPriceXS,
                  e.target.value,
                  '0',
                  '25'
                );
              }}
              color='default'
            />
          }
          label='$0 - $25'
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={statusPriceS}
              value='currentPrice_gte=25&currentPrice_lte=50'
              onChange={(e) => {
                changeBoxValue(
                  statusPriceS,
                  setStatusPriceS,
                  e.target.value,
                  '25',
                  '50'
                );
              }}
              color='default'
            />
          }
          label='$25 - $50'
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={statusPriceSM}
              value='currentPrice_gte=50&currentPrice_lte=100'
              onChange={(e) => {
                changeBoxValue(
                  statusPriceSM,
                  setStatusPriceSM,
                  e.target.value,
                  '50',
                  '100'
                );
              }}
              color='default'
            />
          }
          label='$50 - $100'
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={statusPriceM}
              value='currentPrice_gte=100&currentPrice_lte=150'
              onChange={(e) => {
                changeBoxValue(
                  statusPriceM,
                  setStatusPriceM,
                  e.target.value,
                  '100',
                  '150'
                );
              }}
              color='default'
            />
          }
          label='$100 - $150'
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={statusPriceL}
              value='currentPrice_gte=150'
              onChange={(e) => {
                changeBoxValue(
                  statusPriceL,
                  setStatusPriceL,
                  e.target.value,
                  '150'
                );
              }}
              color='default'
            />
          }
          label='Over $150'
        />
      </FormGroup>
    </PriceBox>
  );
};

export default PriceCheckBoxComponent;
