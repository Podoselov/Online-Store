import React, { useState, useEffect } from 'react';
import { GenderBox } from './stylesGender';
import {
  FormGroup,
  FormControlLabel,
  RadioGroup,
  Checkbox,
} from '@mui/material';
import { removeCategory, addCategory } from '../../../../store/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams, useNavigate } from 'react-router-dom';

const GenderCheckBoxComponent = () => {
  const [statusCheckBoxMen, setStatusCheckBoxMen] = useState(false);
  const [statusCheckBoxWomen, setStatusCheckBoxWomen] = useState(false);
  const [statusCheckBoxKids, setStatusCheckBoxKids] = useState(false);

  let [params] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const categoryLink = (category) => {
    let isActive = params.getAll('category').includes(category);
    if (!isActive) {
      params.append('category', category);
      params.delete('_page');
      params.set('_page', 1);
    } else {
      params = new URLSearchParams(
        Array.from(params).filter(
          ([key, value]) => key !== 'category' || value !== category
        )
      );
    }
    return params.toString();
  };

  const categoryParams = params.getAll('category');

  const addActiveCheckBox = () => {
    if (categoryParams.length > 0) {
      return categoryParams.map((element) => {
        if (element === 'men') {
          return setStatusCheckBoxMen(true);
        }
        if (element === 'women') {
          return setStatusCheckBoxWomen(true);
        }
        if (element === 'kids') {
          return setStatusCheckBoxKids(true);
        }
      });
    }
    return (
      setStatusCheckBoxMen(false),
      setStatusCheckBoxWomen(false),
      setStatusCheckBoxKids(false)
    );
  };

  useEffect(() => {
    addActiveCheckBox();
  }, [categoryParams]);

  const changeBoxValue = async (state, setState, value) => {
    setState(!state);
    state ? dispatch(removeCategory(value)) : dispatch(addCategory(value));
    navigate(`?${categoryLink(value.slice(10))}`);
  };

  return (
    <GenderBox>
      <p>Gender</p>
      <FormGroup>
        <RadioGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={statusCheckBoxMen}
                value='&category=men'
                onChange={(e) => {
                  changeBoxValue(
                    statusCheckBoxMen,
                    setStatusCheckBoxMen,
                    e.target.value
                  );
                }}
                color='default'
              />
            }
            label='Men'
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={statusCheckBoxWomen}
                value='&category=women'
                onChange={(e) => {
                  changeBoxValue(
                    statusCheckBoxWomen,
                    setStatusCheckBoxWomen,
                    e.target.value
                  );
                }}
                color='default'
              />
            }
            label='Women'
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={statusCheckBoxKids}
                value='&category=kids'
                color='default'
                onChange={(e) => {
                  changeBoxValue(
                    statusCheckBoxKids,
                    setStatusCheckBoxKids,
                    e.target.value
                  );
                }}
              />
            }
            label='Kids'
          />
        </RadioGroup>
      </FormGroup>
    </GenderBox>
  );
};

export default GenderCheckBoxComponent;
