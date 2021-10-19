import React from "react";
import styled from "styled-components";
import Header from "../components/common/Header";
import MainNav from "../components/main/MainNav";
import Profile from "../components/main/Profile";
import { colors } from "../libs/constants/colors";
import ArticlesContainer from "../components/main/Articles";

const Main = () => {
  return (
    <Styled.Root>
      <Header />
      <Styled.Main>
        <Profile />
        <MainNav type="main" />
        <ArticlesContainer />
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
