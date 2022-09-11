import { useTheme } from "@emotion/react";
import { Grid, List, ListItemButton, Typography } from "@mui/material";
import { DescriptionTypo } from "./DisplayEpisodes.styles";

export default function DisplayEpisodes(props) {
  const episodes = props;
  const theme = useTheme();
  return (
    <List component="nav" aria-label="episodes list">
      {episodes.episodes.map((episode, i) => {
        return (
          <ListItemButton key={i}>
            <Grid
              container
              columns={12}
              mt={2}
              sx={{ borderBottom: "1px solid grey", paddingBottom: "3%" }}
              key={episode.episode_number}
            >
              <Grid item xs={2}>
                <Typography
                  sx={{
                    marginLeft: "60%",
                    marginTop: "25%",
                  }}
                >
                  {episode.episode_number}
                </Typography>
              </Grid>
              <Grid
                item
                xs={2}
                sx={{
                  height: "100px",
                  backgroundImage: `url(https://image.tmdb.org/t/p/original${episode.still_path})`,
                  backgroundSize: "100% 100%",
                }}
              ></Grid>
              <Grid item xs={8}>
                <Typography
                  sx={{
                    marginLeft: "2%",
                    color: theme.palette.mode === "light" ? "#181818" : "",
                  }}
                  variant="h6"
                >
                  {episode.name}
                </Typography>
                <DescriptionTypo>{episode.overview}</DescriptionTypo>
              </Grid>
            </Grid>
          </ListItemButton>
        );
      })}
    </List>
  );
}
