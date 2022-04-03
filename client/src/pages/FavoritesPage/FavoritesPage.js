import React from 'react';
import { StyledGridContainer } from '../ProductsPage/productsComponent/productsListComponent/stylesProductsList';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Container, IconButton } from '@mui/material';
import {
  StyledTypographyHeading,
  StyledTypographyText,
} from '../BuyPage/stylesBuyPage';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  removeFavoritesCard,
  getProductFavorites,
} from '../../store/actions/actions';
import {
  StyledLink,
  StyledLinkBox,
  StyledLinkItem,
  StyledHeadingItem,
  StyledLinkText,
  StyledText,
} from '../HomePage/sliderSection/stylesSliderComponent';

function FavoritesPage() {
  const dispatch = useDispatch();

  const showOneProduct = (product) => {
    dispatch(getProductFavorites(product));
  };

  const favoritesCard = useSelector((state) => state.products.favorites);

  const removeCard = (element) => {
    dispatch(removeFavoritesCard(element));
  };

  return (
    <Container>
      <StyledTypographyHeading variant='h2' sx={{ padding: '20px' }}>
        Favorites
      </StyledTypographyHeading>
      {favoritesCard.length === 0 ? (
        <StyledTypographyText sx={{ paddingLeft: '20px' }}>
          There are no items in favorites.
        </StyledTypographyText>
      ) : (
        <StyledGridContainer
          container
          direction='row'
          justifyContent='flex-start'
          wrap='wrap'
          gap={4}
        >
          {favoritesCard.map((element) => {
            return (
              <Grid xs={12} md={4} item key={element.idProduct}>
                <StyledLink
                  to={`/products/:${element.idProduct}`}
                  onClick={() => {
                    showOneProduct(element);
                  }}
                >
                  <img src={element.imageUrls[0]} alt='фото кроссовок найк' />
                  <StyledLinkBox>
                    <StyledLinkItem>
                      <StyledHeadingItem>{element.name}</StyledHeadingItem>
                      <StyledLinkText>{element.brand}</StyledLinkText>
                    </StyledLinkItem>
                    <StyledText>{element.currentPrice}</StyledText>
                  </StyledLinkBox>
                </StyledLink>
                <IconButton
                  onClick={() => {
                    removeCard(element.idProduct);
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </Grid>
            );
          })}
        </StyledGridContainer>
      )}
    </Container>
  );
}

export default FavoritesPage;
