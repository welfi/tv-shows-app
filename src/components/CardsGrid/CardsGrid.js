import { Grid, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { InfoTypo } from "./CardsGrid.styles";
import CenterContainer from "components/containers/CenterContainer";
import ReviewCard from "components/shared/ReviewCard/ReviewCard";

export default function CardsGrid(props) {
  const { page, search, statusShows, shows, favorites } = props;
  return page === "home" ? (
    !search ? (
      <Container maxWidth="lg" sx={{ marginTop: "50px" }}>
        <InfoTypo align="center" variant="h5">
          Start Searching ...
        </InfoTypo>
      </Container>
    ) : statusShows === "pending" ? (
      <CenterContainer></CenterContainer>
    ) : shows.length === 0 ? (
      <Container maxWidth="lg" sx={{ marginTop: "50px" }}>
        <InfoTypo align="center" variant="h5">
          No shows are found !
        </InfoTypo>
      </Container>
    ) : (
      <Container maxWidth="lg" sx={{ marginTop: "50px", marginBottom: "50px" }}>
        <InfoTypo
          align="center"
          variant="h5"
        >{`You are searching for '${search}'`}</InfoTypo>
        <Grid container columns={12} spacing={2} sx={{ margin: "0" }}>
          {shows &&
            shows.map((show) => (
              <Grid
                item
                lg={3}
                md={4}
                mt={2}
                xs={6}
                key={show.id}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <ReviewCard
                  id={show.id}
                  poster={show.poster_path}
                  title={show.title || show.name}
                  date={show.first_air_date || show.release_date}
                  vote_average={show.vote_average}
                  item={show}
                  genres={show.genre_ids}
                  sx={{
                    width: "100%",
                    maxWidth: "275px",
                  }}
                />
              </Grid>
            ))}
        </Grid>
      </Container>
    )
  ) : favorites.length !== 0 ? (
    <Container maxWidth="lg" sx={{ marginTop: "50px", marginBottom: "50px" }}>
      <Grid container columns={12} spacing={2} sx={{ margin: "0" }}>
        {favorites &&
          favorites.map((show) => (
            <Grid
              item
              lg={3}
              md={4}
              mt={2}
              xs={6}
              key={show.id}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              {show.genre_ids ? (
                <ReviewCard
                  id={show.id}
                  poster={show.poster_path}
                  title={show.title || show.name}
                  date={show.first_air_date || show.release_date}
                  vote_average={show.vote_average}
                  item={show}
                  genres={show.genre_ids}
                  sx={{
                    width: "100%",
                    maxWidth: "275px",
                  }}
                />
              ) : (
                <ReviewCard
                  id={show.id}
                  poster={show.poster_path}
                  title={show.title || show.name}
                  date={show.first_air_date || show.release_date}
                  vote_average={show.vote_average}
                  item={show}
                  genres={show.genres}
                  sx={{
                    width: "100%",
                    maxWidth: "275px",
                  }}
                />
              )}
            </Grid>
          ))}
      </Grid>
    </Container>
  ) : (
    <Container sx={{ marginTop: "100px" }}>
      <Typography variant="h4">
        You have no favorites yet, Go ahead and add some !
      </Typography>
    </Container>
  );
}
