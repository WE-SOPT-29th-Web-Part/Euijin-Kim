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
    summary: null,
    series: null,
    tags: [],
    thumbnail: null,
    date: null,
  });

  const [isPublishScreen, setIsPublishScreen] = useState(false);

  useEffect(() => {
    // console.log(`articleCard`, articleData);
  }, [articleData]);

  const createArticle = async () => {
    const { data } = await client.get("/article");
    console.log(`data`, data);
    console.log(`{ ...articleData, id: data.length }`, {
      ...articleData,
      id: data.length + 1,
      date: new Date(),
    });
    // await client.post("/article", { ...articleData, id: data.length });
    await client.post("/article", {
      id: 4,
      title: "[JavaScript] 단어수세기 구현 (split, 정규식)",
      body: "오늘은 단어수세기를 구현해보겠습니다. 보통 한국어는 글자수를 기준으로, 영어는 단어수를 기준으로 셉니다.# 단어란1. [표준어국어대사전] 분리하여 자립적으로 쓸 수 있는 말이나 이에 준하는 말. 또는 그 말의 뒤에 붙어서 문법적 기능을 나타내는 말.2. 간단하게 말하면, 영어에서 띄어쓰기 단위와 같다. a, the, apple, is, new 등 모든 띄어쓰기 단위들이 단어이다.",
      summary:
        "오늘은 단어수세기를 구현해보겠습니다.보통 한국어는 글자수를 기준으로, 영어는 단어수를 기준으로 셉니다표준어국어대사전 분리하여 자립적으로 쓸 수 있는 말이나 이에 준하는 말. 또는 그 말의 뒤에 붙어서 문법적 기능을 나타내는 말.간단하게 말하면, 영어에서 띄어쓰기 단위와",
      series: "발표시간 계산기 개발기",
      tags: ["JavaScript", "단어수세기", "정규식"],
      thumbnail:
        "https://kyrics.s3.ap-northeast-2.amazonaws.com/kyrics_og_image.png",
      date: "2021년 10월 4일",
    });
  };

  const handleDataChange = (e, key) => {
    // title, body, summary, series, thumbnail의 변화에 적용ㅐ
    const tempArticleData = { ...articleData };
    tempArticleData[key] = e.target.value;
    setArticleData(tempArticleData);
  };
  const handleArrDataChange = (e, key) => {
    // tag의 변화에 적용
    const tempArticleData = { ...articleData };
    tempArticleData[key] = [...tempArticleData[key], e.target.value];
    setArticleData(tempArticleData);
  };
  const handleArrDataRemove = (e, key) => {
    const tempArticleData = { ...articleData };
    tempArticleData[key] = tempArticleData[key].filter(
      (ele) => ele !== e.target.innerText
    );
    setArticleData(tempArticleData);
  };

  return (
    <Styled.Root>
      <Styled.Top>
        <ArticleTitle handleDataChange={handleDataChange} />
        <Styled.MiddleLine />
        <ArticleTag
          handleArrDataChange={handleArrDataChange}
          handleArrDataRemove={handleArrDataRemove}
        />
      </Styled.Top>
      <ArticleBody handleDataChange={handleDataChange} />
      <ArticleFooter setIsPublishScreen={setIsPublishScreen} />
      {isPublishScreen && (
        <PublishScreen
          handleDataChange={handleDataChange}
          createArticle={createArticle}
        />
      )}
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
