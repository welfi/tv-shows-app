import React from "react";
import { useDispatch } from "react-redux";
import { CssTextField } from "./Search.styles";
import { change } from "redux/search.slice";
import { useLocation, useNavigate } from "react-router-dom";

export function Search() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  return (
    <CssTextField
      size="small"
      label="Search"
      onChange={(e) => {
        dispatch(change(e.target.value));
        if (location.pathname !== "/") {
          navigate("/");
        }
      }}
    ></CssTextField>
  );
}
