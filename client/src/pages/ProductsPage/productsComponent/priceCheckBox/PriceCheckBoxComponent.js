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

  const priceLink = (price) => {
    let isActive = params.getAll('price').includes(price);
    if (!isActive) {
      params.append('price', price);
    } else {
      params = new URLSearchParams(
        Array.from(params).filter(
          ([key, value]) => key !== 'price' || value !== price
        )
      );
    }
    return params.toString();
  };

  const statusPriceCategory = useSelector(
    ({ products }) => products.category.statusPrice
  );

  const addActiveCheckBox = () => {
    if (statusPriceCategory.length > 0) {
      return statusPriceCategory.map((element) => {
        if (element === 'currentPrice_gte=1&currentPrice_lte=25') {
          return setStatusPriceXS(true);
        }
        if (element === 'currentPrice_gte=25&currentPrice_lte=50') {
          return setStatusPriceS(true);
        }
        if (element === 'currentPrice_gte=50&currentPrice_lte=100') {
          return setStatusPriceSM(true);
        }
        if (element === 'currentPrice_gte=100&currentPrice_lte=150') {
          return setStatusPriceM(true);
        }
        if (element === 'currentPrice_gte=150') {
          return setStatusPriceL(true);
        }
      });
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
  }, [statusPriceCategory]);

  const changeBoxValue = async (state, setState, value) => {
    setState(!state);
    state
      ? dispatch(removeStatusPriceCategory(value))
      : dispatch(addStatusPriceCategory(value));

    navigate(`?${priceLink(value)}`);
  };

  return (
    <PriceBox>
      <p>Shop by Price</p>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={statusPriceXS}
              value='currentPrice_gte=1&currentPrice_lte=25'
              onChange={(e) => {
                changeBoxValue(statusPriceXS, setStatusPriceXS, e.target.value);
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
                changeBoxValue(statusPriceS, setStatusPriceS, e.target.value);
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
                changeBoxValue(statusPriceSM, setStatusPriceSM, e.target.value);
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
                changeBoxValue(statusPriceM, setStatusPriceM, e.target.value);
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
                changeBoxValue(statusPriceL, setStatusPriceL, e.target.value);
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
