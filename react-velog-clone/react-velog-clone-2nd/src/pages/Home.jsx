import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import Header from "../components/common/Header";
import Profile from "../components/home/Profile";
import HomeNav from "../components/home/HomeNav";
import ArticlesContainer from "../components/home/ArticlesContainer";
import SeriesCategory from "../components/home/SeriesCategory";

const Home = () => {
  // ArticlesContainer에서 데이터를 get 해올 것
  // Write에서 Article을 post할 것
  return (
    <div>
      <Header />
      <StyledMain>
        <Profile />
        <HomeNav />
        {/* 중첩 라우트 */}
        <Route
          path="/"
          exact
          component={() => <ArticlesContainer></ArticlesContainer>}
        />
        <Route
          path="/series"
          exact
          component={() => <SeriesCategory></SeriesCategory>}
        />
      </StyledMain>
    </div>
  );
};

export default Home;

const StyledMain = styled.main`
  max-width: 768px;
`;
