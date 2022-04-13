import React, { useState, useEffect } from 'react';
import { BrandBox } from './stylesBrandCheckBox';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeBrandCategory,
  addBrandCategory,
} from '../../../../store/actions/actions';

const BrandCheckBoxComponent = () => {
  const [statusCheckBoxSportswear, setStatusCheckBoxSportswear] =
    useState(false);
  const [statusCheckBoxJordan, setStatusCheckBoxJordan] = useState(false);
  const [statusCheckBoxByYou, setStatusCheckBoxByYou] = useState(false);
  const [statusCheckBoxConverse, setStatusCheckBoxConverse] = useState(false);
  const [statusCheckBoxLab, setStatusCheckBoxLab] = useState(false);
  const [statusCheckBoxACG, setStatusCheckBoxACG] = useState(false);

  const dispatch = useDispatch();

  const brandCategory = useSelector(({ products }) => products.category.brand);

  const addActiveCheckBox = () => {
    if (brandCategory.length > 0) {
      return brandCategory.map((element) => {
        if (element === '&brand=Nike Sportswear') {
          return setStatusCheckBoxSportswear(true);
        }
        if (element === '&brand=Jordan') {
          return setStatusCheckBoxJordan(true);
        }
        if (element === '&brand=Nike By You') {
          return setStatusCheckBoxByYou(true);
        }
        if (element === '&brand=Converse') {
          return setStatusCheckBoxConverse(true);
        }
        if (element === '&brand=NikeLab') {
          return setStatusCheckBoxLab(true);
        }
        if (element === '&brand=ACG') {
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
  }, [brandCategory]);

  const changeBoxValue = (state, setState, value) => {
    setState(!state);
    state
      ? dispatch(removeBrandCategory(value))
      : dispatch(addBrandCategory(value));
  };

  return (
    <BrandBox>
      <p>Shop by Brand</p>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox color='default' />}
          checked={statusCheckBoxSportswear}
          label='Nike Sportswear'
          value='&brand=Nike Sportswear'
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
          value='&brand=Jordan'
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
          value='&brand=Nike By You'
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
          value='&brand=Converse'
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
          value='&brand=NikeLab'
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
          value='&brand=ACG'
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
