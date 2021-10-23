import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ArticleBody from "../components/write/ArticleBody";
import ArticleFooter from "../components/write/ArticleFooter";
import ArticleTag from "../components/write/ArticleTag";
import ArticleTitle from "../components/write/ArticleTitle";
import PublishScreen from "../components/write/PublishScreen/index";
import { client } from "../libs/api";
import { colors } from "../libs/constants/colors";

const Write = () => {
  const [articleData, setArticleData] = useState({
    id: null,
    title: null,
    body: null,
    summary: "",
    series: null,
    tags: [],
    thumbnail: null,
    date: null,
  });

  const [isPublishScreen, setIsPublishScreen] = useState(false);

  useEffect(() => {
    console.log(`articleData`, articleData);
  }, [articleData]);

  const createArticle = async () => {
    const { data } = await client.get("/article");

    await client.post("/article", {
      ...articleData,
      id: data.length,
      date: new Date(),
    });
  };

  const handleDataChange = (value, key) => {
    // title, body, summary, series, thumbnail의 변화에 적용ㅐ
    const tempArticleData = { ...articleData };
    tempArticleData[key] = value;
    setArticleData(tempArticleData);
  };
  const handleArrDataChange = (value, key) => {
    // tag의 변화에 적용
    const tempArticleData = { ...articleData };
    tempArticleData[key] = [...tempArticleData[key], value];
    setArticleData(tempArticleData);
  };
  const handleArrDataRemove = (innerText, key) => {
    const tempArticleData = { ...articleData };
    tempArticleData[key] = tempArticleData[key].filter(
      (ele) => ele !== innerText
    );
    setArticleData(tempArticleData);
  };

  return (
    <Styled.Root>
      <Styled.Top>
        <ArticleTitle handleDataChange={handleDataChange} />
        <Styled.MiddleLine />
        <ArticleTag
          tags={articleData.tags}
          handleArrDataChange={handleArrDataChange}
          handleArrDataRemove={handleArrDataRemove}
        />
      </Styled.Top>
      <ArticleBody handleDataChange={handleDataChange} />
      <ArticleFooter setIsPublishScreen={setIsPublishScreen} />
      {/* {isPublishScreen && ( */}
      <PublishScreen
        summary={articleData.summary}
        handleDataChange={handleDataChange}
        createArticle={createArticle}
        isPublishScreen={isPublishScreen}
        setIsPublishScreen={setIsPublishScreen}
      />
      {/* )} */}
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
