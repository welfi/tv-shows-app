import * as React from "react";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorite, removeFromFavorite } from "redux/favorite.slice";
import AddIcon from "@mui/icons-material/Add";
import CheckIcon from "@mui/icons-material/Check";
import Button from "@mui/material/Button";

export default function FavoriteButton(props) {
  const { item, text } = props;
  const state = useSelector((state) => state.favorite.favorites);
  let fav = state.some((a) => a.id === item.id);
  const dispatch = useDispatch();
  function toggleFavorite() {
    fav = !fav;
    if (fav) {
      dispatch(addToFavorite(item));
    } else {
      dispatch(removeFromFavorite(item));
    }
  }
  return !fav ? (
    <>
      <Button
        startIcon={<AddIcon sx={{ color: "#ffffff" }} />}
        onClick={toggleFavorite}
      >
        <Typography
          sx={{
            color: "white",
            fontSize: "12px",
            fontWeight: "900",
            marginLeft: "5px",
          }}
        >
          {text}
        </Typography>
      </Button>
    </>
  ) : (
    <>
      <Button
        startIcon={<CheckIcon sx={{ color: "green" }} />}
        onClick={toggleFavorite}
      >
        <Typography
          sx={{
            color: "white",
            fontSize: "12px",
            fontWeight: "900",
            marginLeft: "5px",
          }}
        >
          {text}
        </Typography>
      </Button>
    </>
  );
}
