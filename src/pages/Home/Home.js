import { Box } from "@mui/material";
import CardsGrid from "components/CardsGrid/CardsGrid";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "redux/search.slice";

const Home = () => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search.search);
  const status = useSelector((state) => state.search.status);
  const shows = useSelector((state) => state.search.shows);

  React.useEffect(() => {
    if (search) {
      dispatch(fetchData(search));
    }
  }, [dispatch, search]);

  return (
    <>
      <Box>
        <CardsGrid
          page="home"
          shows={shows}
          statusShows={status}
          search={search}
        ></CardsGrid>
      </Box>
    </>
  );
};

export default Home;
