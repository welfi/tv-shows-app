import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const SearchBox = styled(Box)(({ theme }) => ({
  height: "50px",
  width: "100%",
  position: "absolute",
  top: "0",
  right: "0",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#262626",
}));
