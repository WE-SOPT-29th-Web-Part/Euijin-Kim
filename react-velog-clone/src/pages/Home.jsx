import React from "react";
import styled from "styled-components";
import Header from "../components/common/Header";
import { colors } from "../libs/constants/colors";
import Profile from "../components/home/Profile";
import HomeNav from "../components/home/HomeNav";
import { Routes, Route } from "react-router-dom";
import ArticlesContainer from "../components/home/ArticlesContainer";
import SeriesCategory from "../components/home/SeriesCategory";

const Home = () => {
  return (
    <StyledRoot>
      <Header />
      <StyledMain>
        <Profile />
        <HomeNav />
        <Routes>
          <Route path="/series" element={<SeriesCategory />} />
          <Route path="/" element={<ArticlesContainer />} />
        </Routes>
      </StyledMain>
    </StyledRoot>
  );
};

export default Home;

const StyledRoot = styled.div`
  background-color: ${colors.mainWhite};
`;

const StyledMain = styled.main`
  max-width: 768px;
  width: 100%;
  margin: auto;
`;
