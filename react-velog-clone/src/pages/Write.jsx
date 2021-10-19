import React, { useState } from "react";
import styled from "styled-components";
import ArticleBody from "../components/write/ArticleBody";
import ArticleFooter from "../components/write/ArticleFooter";
import ArticleTag from "../components/write/ArticleTag";
import ArticleTitle from "../components/write/ArticleTitle";
import { colors } from "../libs/constants/colors";

const Write = () => {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const [summary, setSummary] = useState();
  const [series, setSeries] = useState();
  const [tagArr, setTagArr] = useState([]);
  const [thumbnail, setThumbnail] = useState();
  const [data, setDate] = useState();

  return (
    <Styled.Root>
      <Styled.Top>
        <ArticleTitle />
        <Styled.MiddleLine />
        <ArticleTag tagArr={tagArr} setTagArr={setTagArr} />
      </Styled.Top>
      <ArticleBody />
      <ArticleFooter />
    </Styled.Root>
  );
};

export default Write;

const Styled = {
  Root: styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
  `,
  Top: styled.div`
    padding: 32px 48px 0 48px;
    width: 50%;
  `,
  MiddleLine: styled.div`
    width: 64px;
    height: 6px;
    background-color: ${colors.lightGray};
    margin: 24px 0;
  `,
};
