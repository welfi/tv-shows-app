import { Typography } from "@mui/material";
import styled from "@emotion/styled";

export const DescriptionTypo = styled(Typography)(({ theme }) => ({
  marginLeft: "2%",
  color: theme.palette.mode === "dark" ? "#c2c2c2" : "black",
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: "2",
  WebkitBoxOrient: "vertical",
}));
