import React from "react";
import styled from "styled-components";
import Header from "../components/common/Header";

import { colors } from "../libs/constants/colors";

import UserPage from "../components/main/UserPage";
import Profile from "../components/main/Profile";
import MainNav from "../components/main/MainNav";
import { Route } from "react-router";
import ArticlesContainer from "../components/main/Articles";
import SeriesCategory from "./SeriesCategory";

const Main = () => {
  return (
    <Styled.Root>
      <Header />
      <Styled.Main>
        <Profile />
        <MainNav />
        <Route path="/" exact component={ArticlesContainer} />
        {/* <Route path="/123" exact component={() => <ArticlesContainer />} /> */}
        <Route path="/series" component={() => <SeriesCategory />} />
      </Styled.Main>
    </Styled.Root>
  );
};

export default Main;

const Styled = {
  Root: styled.div`
    background-color: ${colors.mainWhite};
  `,
  Main: styled.main`
    max-width: 768px;
    width: 100%;
    margin: auto;
  `,
};
