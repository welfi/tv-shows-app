import styled from "@emotion/styled";
import { Grid, Box, Typography } from "@mui/material";

export const InfoGrid = styled(Grid)(({ backdrop_path }) => ({
  margin: "0",
  width: "100%",
  height: "600px",
  backgroundSize: "100% 100%",
  backgroundImage: `linear-gradient(to top, rgba(0,0,0,1) 30%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.7) 75%,rgba(0,0,0,0) 100%) , url('https://image.tmdb.org/t/p/original${backdrop_path}')`,
}));

export const InfoBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  marginLeft: "10%",
  backgroundColor: "#434343",
  borderRadius: "5px",
  width: "125px",
  marginTop: "5%",
}));

export const NameTypo = styled(Typography)(({ theme }) => ({
  marginTop: "5%",
  marginLeft: "10%",
  fontWeight: "900",
  fontSize: "40px",
}));

export const CreatedTypo = styled(Typography)(({ theme }) => ({
  marginTop: "60%",
  marginLeft: "10%",
  color: "lightgray",
  fontSize: 15,
  lineHeight: 1.5,
}));
