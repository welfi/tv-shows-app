import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import CenterContainer from "components/containers/CenterContainer";
import { HOME, WATCHLIST } from "constants/routes";
const Header = lazy(() => import("components/Header"));

const Home = lazy(() => import("pages/Home"));
const Watchlist = lazy(() => import("pages/Watchlist"));
const ShowInfo = lazy(() => import("pages/ShowInfo"));

const RouterConfig = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path={HOME} element={<Home />} />
          <Route path={WATCHLIST} element={<Watchlist />} />
          <Route path="/tv/:id" element={<ShowInfo />} />
        </Routes>
      </Suspense>
    </>
  );
};

const Loader = () => (
  <CenterContainer>
    <CircularProgress />
  </CenterContainer>
);

export default RouterConfig;
