import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { Box, CardActionArea, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";
import FavoriteButton from "components/shared/FavoriteButton/FavoriteButton";
import { pred } from "constants/apiConstants";

export default function ReviewCard(props) {
  const theme = useTheme();
  const {
    id,
    poster,
    title,
    vote_average,
    item,
    genres,
    genres_ids,
    ...restProps
  } = props;
  return genres ? (
    <Card
      {...restProps}
      sx={{
        backgroundColor:
          theme.palette.mode === "dark" ? theme.palette.grey.main : "#484b6a",
        border: "1px solid black",
        ...restProps.sx,
      }}
    >
      <CardActionArea>
        <CardContent
          sx={{
            padding: 0,
          }}
        ></CardContent>
        <nav>
          <Link
            to={`/tv/${id}`}
            style={{
              textDecoration: "none",
            }}
          >
            <CardMedia
              component="img"
              height="400"
              loading="lazy"
              src={`https://image.tmdb.org/t/p/original${poster}`}
              onError={(event) => {
                event.target.src =
                  "https://dominionmartialarts.com/wp-content/uploads/2017/04/default-image.jpg";
                event.onerror = null;
              }}
            />
            <Box
              sx={{
                height: "65px",
                width: "100%",
              }}
            >
              <Typography ml={2} mt={1}>
                {title}
              </Typography>
              <Typography
                ml={2}
                sx={{
                  color: "lightgray",
                  fontSize: "13px",
                }}
              >
                {genres.map((e, i) => {
                  // eslint-disable-next-line array-callback-return
                  return pred.genres.map((a) => {
                    if (e === a.id) {
                      return i === 0 ? a.name : `, ${a.name}`;
                    }
                  });
                })}
              </Typography>
            </Box>
          </Link>
        </nav>
      </CardActionArea>
      <CardActions
        sx={{
          padding: 0,
        }}
        disableSpacing
      >
        <Box
          mb={1}
          sx={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            marginTop: "-20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "80%",
              alignItems: "center",
              marginTop: "20px",
              marginLeft: "10px",
            }}
          >
            <FavoriteButton
              item={item}
              text={"ADD TO WATCHLIST"}
            ></FavoriteButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              width: "20%",
              alignItems: "center",
              marginTop: "20px",
              marginRight: "10px",
            }}
          >
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: "300",
                marginRight: "5px",
              }}
            >
              {vote_average}
            </Typography>
            <StarIcon
              sx={{
                color: "yellow",
                fontSize: "15px",
                marginBottom: "1px",
              }}
            ></StarIcon>
          </Box>
        </Box>
      </CardActions>
    </Card>
  ) : genres_ids ? (
    <Card
      {...restProps}
      sx={{
        backgroundColor: "black",
        border: "1px solid black",
        ...restProps.sx,
      }}
    >
      <CardActionArea>
        <CardContent
          sx={{
            padding: 0,
          }}
        ></CardContent>
        <nav>
          <Link
            to={`/tv/${id}`}
            style={{
              textDecoration: "none",
            }}
          >
            <CardMedia
              component="img"
              height="400"
              src={`https://image.tmdb.org/t/p/original${poster}`}
            />
            <Box
              sx={{
                height: "65px",
                width: "100%",
              }}
            >
              <Typography
                ml={2}
                mt={1}
                sx={{ color: theme.palette.primary.main }}
              >
                {title}
              </Typography>
              <Typography
                ml={2}
                sx={{
                  color: "lightgray",
                  fontSize: "13px",
                }}
              >
                {genres.map((e, i) => {
                  return i === 0 ? e.name : `, ${e.name}`;
                })}
              </Typography>
            </Box>
          </Link>
        </nav>
        <CardActions
          sx={{
            padding: 0,
          }}
          disableSpacing
        >
          <Box
            mb={1}
            sx={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              marginTop: "-20px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: "80%",
                alignItems: "center",
                marginTop: "20px",
                marginLeft: "10px",
              }}
            >
              <FavoriteButton item={item}></FavoriteButton>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                width: "20%",
                alignItems: "center",
                marginTop: "20px",
                marginRight: "10px",
              }}
            >
              <Typography
                sx={{
                  color: theme.palette.primary.main,
                  fontSize: "15px",
                  fontWeight: "300",
                  marginRight: "5px",
                }}
              >
                {vote_average.toString().substr(0, 3)}
              </Typography>
              <StarIcon
                sx={{
                  color: "yellow",
                  fontSize: "15px",
                  marginBottom: "1px",
                }}
              ></StarIcon>
            </Box>
          </Box>
        </CardActions>
      </CardActionArea>
    </Card>
  ) : null;
}
