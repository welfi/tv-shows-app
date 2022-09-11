import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import CardsGrid from "components/CardsGrid/CardsGrid";

const Wishlist = () => {
  const favorites = useSelector((state) => state.favorite.favorites);
  return (
    <Container>
      <Box>
        <CardsGrid page="watchlist" favorites={favorites}></CardsGrid>
      </Box>
    </Container>
  );
};

export default Wishlist;
