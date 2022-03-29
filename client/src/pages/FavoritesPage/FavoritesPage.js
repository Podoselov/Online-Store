import React from 'react';
import { StyledGridContainer } from '../ProductsPage/productsComponent/productsListComponent/stylesProductsList';
import { useSelector, useDispatch } from 'react-redux';
import SliderItemComponent from '../HomePage/sliderSection/SliderItemComponent';
import { Grid, Container, IconButton } from '@mui/material';
import {
  StyledTypographyHeading,
  StyledTypographyText,
} from '../BuyPage/stylesBuyPage';
import DeleteIcon from '@mui/icons-material/Delete';
import { removeFavoritesCard } from '../../store/actions/actions';

function FavoritesPage() {
  const dispatch = useDispatch();

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
          alignItems='center'
          wrap='wrap'
        >
          {favoritesCard.map((element) => {
            return (
              <Grid xs={6} item key={element.idProduct}>
                <SliderItemComponent
                  idProduct={element.idProduct}
                  img={element.imageUrls[0]}
                  heading={element.name}
                  linkText={element.brand}
                  price={`$${element.currentPrice}`}
                />
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
