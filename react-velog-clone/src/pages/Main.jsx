import React from "react";
import styled from "styled-components";
import Header from "../components/common/Header";
import MainNav from "../components/main/MainNav";
import Profile from "../components/main/Profile";

const Main = () => {
  return (
    <div>
      <Header />
      <Styled.Main>
        <Profile />
        <MainNav />
      </Styled.Main>
    </div>
  );
};

export default Main;

const Styled = {
  Main: styled.main`
    max-width: 768px;
    width: 100%;
    margin: auto;
  `,
};
