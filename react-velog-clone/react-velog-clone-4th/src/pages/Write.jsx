import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import styled from "styled-components";
import ArticleBody from "../components/write/ArticleBody";
import ArticleFooter from "../components/write/ArticleFooter";
import ArticleTag from "../components/write/ArticleTag";
import ArticleTitle from "../components/write/ArticleTitle";
import PublishScreen from "../components/write/PublishScreen/index";
import { client } from "../libs/api";
import { colors } from "../libs/constants/colors";

const Write = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const article = location.state;

  const [articleData, setArticleData] = useState(
    article ?? {
      title: "",
      body: "",
      summary: "",
      tags: [],
      thumbnail: "",
    }
  );

  const [isPublishScreen, setIsPublishScreen] = useState(false);

  const createArticle = async () => {
    // 수정 중일때 출간하기를 누르면 update 시키고, -> patch
    // 새글작성중일때 출간하기를 누르면 post 시킨다.
    if (article) {
      await client.patch(`article/${article.id}`, articleData);
      navigate(`/article/${article.id}`, { state: articleData });
      return;
    }
    await client.post("/article", articleData);
    navigate("/");
  };

  const handleDataChange = (key, value) => {
    // title, body, summary, series, thumbnail의 변화에 적용ㅐ
    const tempArticleData = { ...articleData };
    tempArticleData[key] = value;
    setArticleData(tempArticleData);
  };
  const handleArrDataChange = (key, value) => {
    // tag의 변화에 적용
    const tempArticleData = { ...articleData };
    tempArticleData[key] = [...tempArticleData[key], value];
    setArticleData(tempArticleData);
  };
  const handleArrDataRemove = (key, innerText) => {
    const tempArticleData = { ...articleData };
    tempArticleData[key] = tempArticleData[key].filter(
      (item) => item !== innerText
    );
    setArticleData(tempArticleData);
  };

  return (
    <StyledRoot>
      <StyledTop>
        <ArticleTitle
          title={articleData.title}
          handleDataChange={handleDataChange}
        />
        <StyledMiddleLine />
        <ArticleTag
          tags={articleData.tags}
          handleArrDataChange={handleArrDataChange}
          handleArrDataRemove={handleArrDataRemove}
        />
      </StyledTop>
      <ArticleBody
        body={articleData.body}
        handleDataChange={handleDataChange}
      />
      <ArticleFooter setIsPublishScreen={setIsPublishScreen} />
      <PublishScreen
        summary={articleData.summary}
        onDataChange={handleDataChange}
        createArticle={createArticle}
        isPublishScreen={isPublishScreen}
        setIsPublishScreen={setIsPublishScreen}
      />
    </StyledRoot>
  );
};

export default Write;

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const StyledTop = styled.div`
  padding: 32px 48px 0 48px;
  width: 50%;
`;

const StyledMiddleLine = styled.div`
  width: 64px;
  height: 6px;
  background-color: ${colors.lightGray};
  margin: 24px 0;
`;
