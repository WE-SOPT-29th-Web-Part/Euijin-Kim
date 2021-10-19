import React from "react";
import styled from "styled-components";
import ArticleBody from "../components/write/ArticleBody";
import ArticleTag from "../components/write/ArticleTag";
import ArticleTitle from "../components/write/ArticleTitle";
import { colors } from "../libs/constants/colors";

const Write = () => {
  return (
    <Styled.Root>
      <Styled.Top>
        <ArticleTitle />
        <Styled.MiddleLine />
        <ArticleTag />
      </Styled.Top>
      <ArticleBody />
    </Styled.Root>
  );
};

export default Write;

const Styled = {
  Root: styled.div``,
  Top: styled.div`
    padding: 32px 48px 0 48px;
  `,
  MiddleLine: styled.div`
    width: 64px;
    height: 6px;
    background-color: ${colors.lightGray};
    margin: 24px 0;
  `,
};
