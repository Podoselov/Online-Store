import React from 'react';
import {
  StyledLeftMenuCategories,
  StyledLeftMenuCategoriesLink,
} from './stylesProductsComponent';

const MenuCategoriesComponent = ({ linkName, action }) => {
  return (
    <StyledLeftMenuCategories>
      <StyledLeftMenuCategoriesLink onClick={action}>
        {linkName}
      </StyledLeftMenuCategoriesLink>
    </StyledLeftMenuCategories>
  );
};

export const categories = [
  'Lifestyle',
  'Jordan',
  'Running',
  'Basketball',
  'Football',
];

export default MenuCategoriesComponent;
