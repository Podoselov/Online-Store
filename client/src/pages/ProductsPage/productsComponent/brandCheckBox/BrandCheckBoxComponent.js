import React, { useState, useEffect } from 'react';
import { BrandBox } from './stylesBrandCheckBox';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import { useDispatch } from 'react-redux';
import {
  removeBrandCategory,
  addBrandCategory,
} from '../../../../store/actions/actions';
import { useSearchParams, useNavigate } from 'react-router-dom';

const BrandCheckBoxComponent = () => {
  const [statusCheckBoxSportswear, setStatusCheckBoxSportswear] =
    useState(false);
  const [statusCheckBoxJordan, setStatusCheckBoxJordan] = useState(false);
  const [statusCheckBoxByYou, setStatusCheckBoxByYou] = useState(false);
  const [statusCheckBoxConverse, setStatusCheckBoxConverse] = useState(false);
  const [statusCheckBoxLab, setStatusCheckBoxLab] = useState(false);
  const [statusCheckBoxACG, setStatusCheckBoxACG] = useState(false);

  let [params] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const brandLink = (brand) => {
    let isActive = params.getAll('brand').includes(brand);
    if (!isActive) {
      params.append('brand', brand);
      params.delete('_page');
      params.set('_page', 1);
    } else {
      params = new URLSearchParams(
        Array.from(params).filter(
          ([key, value]) => key !== 'brand' || value !== brand
        )
      );
    }
    return params.toString();
  };

  const brandParams = params.getAll('brand');

  const addActiveCheckBox = () => {
    if (brandParams.length > 0) {
      return brandParams.map((element) => {
        if (element === 'Nike Sportswear') {
          return setStatusCheckBoxSportswear(true);
        }
        if (element === 'Jordan') {
          return setStatusCheckBoxJordan(true);
        }
        if (element === 'Nike By You') {
          return setStatusCheckBoxByYou(true);
        }
        if (element === 'Converse') {
          return setStatusCheckBoxConverse(true);
        }
        if (element === 'NikeLab') {
          return setStatusCheckBoxLab(true);
        }
        if (element === 'ACG') {
          return setStatusCheckBoxACG(true);
        }
      });
    }
    return (
      setStatusCheckBoxSportswear(false),
      setStatusCheckBoxJordan(false),
      setStatusCheckBoxByYou(false),
      setStatusCheckBoxConverse(false),
      setStatusCheckBoxLab(false),
      setStatusCheckBoxACG(false)
    );
  };

  useEffect(() => {
    addActiveCheckBox();
  }, [brandParams]);

  const changeBoxValue = (state, setState, value) => {
    setState(!state);
    state
      ? dispatch(removeBrandCategory(value))
      : dispatch(addBrandCategory(value));
    navigate(`?${brandLink(value)}`);
  };

  return (
    <BrandBox>
      <p>Shop by Brand</p>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox color='default' />}
          checked={statusCheckBoxSportswear}
          label='Nike Sportswear'
          value='Nike Sportswear'
          onChange={(e) => {
            changeBoxValue(
              statusCheckBoxSportswear,
              setStatusCheckBoxSportswear,
              e.target.value
            );
          }}
        />
        <FormControlLabel
          control={<Checkbox color='default' />}
          checked={statusCheckBoxJordan}
          label='Jordan'
          value='Jordan'
          onChange={(e) => {
            changeBoxValue(
              statusCheckBoxJordan,
              setStatusCheckBoxJordan,
              e.target.value
            );
          }}
        />
        <FormControlLabel
          control={<Checkbox color='default' />}
          checked={statusCheckBoxByYou}
          label='Nike By You'
          value='Nike By You'
          onChange={(e) => {
            changeBoxValue(
              statusCheckBoxByYou,
              setStatusCheckBoxByYou,
              e.target.value
            );
          }}
        />
        <FormControlLabel
          control={<Checkbox color='default' />}
          checked={statusCheckBoxConverse}
          label='Converse'
          value='Converse'
          onChange={(e) => {
            changeBoxValue(
              statusCheckBoxConverse,
              setStatusCheckBoxConverse,
              e.target.value
            );
          }}
        />
        <FormControlLabel
          control={<Checkbox color='default' />}
          checked={statusCheckBoxLab}
          label='NikeLab'
          value='NikeLab'
          onChange={(e) => {
            changeBoxValue(
              statusCheckBoxLab,
              setStatusCheckBoxLab,
              e.target.value
            );
          }}
        />
        <FormControlLabel
          control={<Checkbox color='default' />}
          checked={statusCheckBoxACG}
          label='ACG'
          value='ACG'
          onChange={(e) => {
            changeBoxValue(
              statusCheckBoxACG,
              setStatusCheckBoxACG,
              e.target.value
            );
          }}
        />
      </FormGroup>
    </BrandBox>
  );
};

export default BrandCheckBoxComponent;
