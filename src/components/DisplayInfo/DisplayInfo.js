import { Grid, Typography } from "@mui/material";
import FavoriteButton from "components/shared/FavoriteButton/FavoriteButton";
import { GenreChip } from "components/shared/GenreChip/GenreChip";
import { InfoBox, NameTypo, CreatedTypo } from "./DisplayInfo.styles";

export default function DisplayInfo(props) {
  const shows = props;
  const show = shows.show;
  return (
    <Grid
      sx={{
        margin: "0",
        width: "100%",
        height: "500px",
        backgroundSize: "100% 100%",
      }}
      container
      columns={12}
    >
      <Grid item xs={8} maxHeight={"400px"} sx={{ marginTop: "3%" }}>
        <NameTypo>{show.name}</NameTypo>
        {show.genres
          ? show.genres.map((e, i) => {
              return i === 0 ? (
                <GenreChip
                  sx={{ marginLeft: "10%", marginTop: "3%" }}
                  key={e.id}
                  label={`${e.name}`}
                ></GenreChip>
              ) : (
                <GenreChip
                  sx={{ marginLeft: "3%", marginTop: "3%" }}
                  key={e.id}
                  label={`${e.name}`}
                ></GenreChip>
              );
            })
          : null}
        {show.first_air_date ? (
          <GenreChip
            sx={{ marginLeft: "3%", marginTop: "3%" }}
            label={`${show.first_air_date.substring(0, 4)}`}
          ></GenreChip>
        ) : null}
        {show.overview ? (
          <Typography sx={{ marginLeft: "10%", marginTop: "3%" }}>
            {show.overview}
          </Typography>
        ) : null}
        <InfoBox>
          <FavoriteButton item={show} text={"Watchlist"}></FavoriteButton>
        </InfoBox>
      </Grid>
      <Grid item xs={1} sx={{ marginTop: "3%" }}>
        {show.created_by ? <CreatedTypo>{"Created by :"}</CreatedTypo> : null}
      </Grid>
      <Grid item xs={3} sx={{ marginTop: "3%" }}>
        {show.created_by
          ? show.created_by.map((e, i) => {
              return i === 0 ? (
                <Typography
                  sx={{
                    color: "white",
                    marginTop: "20%",
                  }}
                  key={e.id}
                >
                  {e.name}
                </Typography>
              ) : (
                <Typography
                  sx={{
                    color: "white",
                  }}
                  key={e.id}
                >
                  {e.name}
                </Typography>
              );
            })
          : null}
      </Grid>
    </Grid>
  );
}
