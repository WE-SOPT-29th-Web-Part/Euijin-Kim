import React from "react";
import styled from "styled-components";
import Header from "../components/common/Header";
import MainNav from "../components/main/MainNav";
import Profile from "../components/main/Profile";
import { colors } from "../libs/constants/colors";

const SeriesCategory = () => {
  return (
    <Styled.Root>
      <Header />
      <Styled.Main>
        <Profile />
        <MainNav type="series" />
      </Styled.Main>
    </Styled.Root>
  );
};

export default SeriesCategory;

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
