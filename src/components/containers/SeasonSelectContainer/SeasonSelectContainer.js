import { useTheme } from "@emotion/react";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";

export default function SeasonSelectContainer(props) {
  const { show, episodes, dispatch, changeSeason, fetchEpisodes, id } = props;
  const theme = useTheme();
  return (
    <Container
      maxWidth="lg"
      sx={{
        marginTop: "5%",
      }}
    >
      <Grid container columns={12}>
        <Grid item xs={8}>
          <Typography
            variant="h3"
            sx={{ color: theme.palette.mode === "light" ? "#181818" : "" }}
          >
            Episodes
          </Typography>
        </Grid>
        <Grid item xs={4}>
          {show.seasons ? (
            <FormControl fullWidth>
              <InputLabel>Season</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={episodes.season_number}
                label="season"
                onChange={(e) => {
                  dispatch(changeSeason(e.target.value));
                  dispatch(
                    fetchEpisodes({
                      id: id,
                      season_number: e.target.value,
                    })
                  );
                }}
              >
                {show.seasons.map((e, i) => {
                  return (
                    <MenuItem value={e.season_number} key={e.season_number}>
                      {`Season ${e.season_number} (${e.episode_count} episodes)`}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          ) : null}
        </Grid>
      </Grid>
    </Container>
  );
}
