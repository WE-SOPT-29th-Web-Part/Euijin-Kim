import React from "react";
import styled from "styled-components";
import Header from "../components/common/Header";
import { colors } from "../libs/constants/colors";
import Profile from "../components/main/Profile";
import MainNav from "../components/main/MainNav";
import { Route } from "react-router";
import ArticlesContainer from "../components/main/ArticlesContainer";
import SeriesCategory from "./SeriesCategory";

const Main = () => {
  return (
    <StyledRoot>
      <Header />
      <StyledMain>
        <Profile />
        <MainNav />
        <Route path="/" exact component={() => <ArticlesContainer />} />
        <Route path="/series" exact component={() => <SeriesCategory />} />
      </StyledMain>
    </StyledRoot>
  );
};

export default Main;

const StyledRoot = styled.div`
  background-color: ${colors.mainWhite};
`;

const StyledMain = styled.main`
  max-width: 768px;
  width: 100%;
  margin: auto;
`;
