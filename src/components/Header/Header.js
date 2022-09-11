import React from "react";
import Box from "@mui/material/Box";
import { Search } from "./components/Search";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { MaterialUISwitch } from "components/shared/ModeSwitch/ModeSwitch";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import { SearchBox } from "./Header.styles";

const Header = () => {
  return (
    <SearchBox>
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <LiveTvIcon sx={{ color: "red", marginLeft: "20px" }}></LiveTvIcon>
      </Link>
      <Search></Search>
      <Box
        sx={{
          minWidth: "130px",
          height: "100%",
          marginRight: "1%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Link to={"/Watchlist"} style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            sx={{
              fontSize: "12px",
              backgroundColor: "#ff0000",
              color: "white",
              height: "60%",
              "&:hover": {
                backgroundColor: "#ff0000",
              },
            }}
          >
            WATCH LIST
          </Button>
        </Link>
        <MaterialUISwitch></MaterialUISwitch>
      </Box>
    </SearchBox>
  );
};

export default Header;
