import * as React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { fetchShow } from "redux/show.slice";
import { Container } from "@mui/material";
import CenterContainer from "components/containers/CenterContainer";
import { fetchEpisodes, changeSeason } from "redux/show.slice";
import DisplayInfo from "components/DisplayInfo/DisplayInfo";
import SeasonSelectContainer from "components/containers/SeasonSelectContainer/SeasonSelectContainer";
import DisplayEpisodes from "components/DisplayEpisodes/DisplayEpisodes";
import { useTheme } from "@emotion/react";

const ShowInfo = () => {
  const show = useSelector((state) => state.fetch.selected);
  const episodes = useSelector((state) => state.fetch.episodes);
  const episodesStatus = useSelector((state) => state.fetch.episodesStatus);
  const dispatch = useDispatch();
  const { id } = useParams();
  const theme = useTheme();
  React.useEffect(() => {
    dispatch(fetchShow(id));
    dispatch(
      fetchEpisodes({
        id: id,
        season_number: 1,
      })
    );
  }, [dispatch, id]);
  return show ? (
    <>
      {show.created_by ? (
        <Container
          maxWidth="xl"
          sx={{
            backgroundImage:
              theme.palette.mode === "dark"
                ? `linear-gradient(to top, rgba(20,20,20,1) 10%, rgba(20,20,20,0.6) 20%, rgba(20,20,20,0.7) 30%,rgba(20,20,20,0) 100%) ,url('https://image.tmdb.org/t/p/original${show.backdrop_path}')`
                : `linear-gradient(to top, rgba(255,255,255,1) 5%, rgba(255,255,255,0.8) 10%, rgba(255,255,255,0.7) 15%,rgba(255,255,255,0) 20%) ,url('https://image.tmdb.org/t/p/original${show.backdrop_path}')`,
            backgroundSize: "100% 700px",
            backgroundRepeat: "no-repeat",
          }}
        >
          <DisplayInfo show={show}></DisplayInfo>
          {show.seasons &&
          (episodes.season_number || episodes.season_number === 0) ? (
            <SeasonSelectContainer
              show={show}
              episodes={episodes}
              dispatch={dispatch}
              changeSeason={changeSeason}
              fetchEpisodes={fetchEpisodes}
              id={id}
            ></SeasonSelectContainer>
          ) : (
            <CenterContainer></CenterContainer>
          )}
          <Container
            maxWidth="lg"
            sx={{
              marginTop: "2%",
              marginBottom: "50px",
            }}
          >
            {episodesStatus === "success" ? (
              <DisplayEpisodes episodes={episodes.episodes}></DisplayEpisodes>
            ) : (
              <CenterContainer></CenterContainer>
            )}
          </Container>
        </Container>
      ) : (
        <CenterContainer></CenterContainer>
      )}
    </>
  ) : (
    <CenterContainer></CenterContainer>
  );
};
export default ShowInfo;
