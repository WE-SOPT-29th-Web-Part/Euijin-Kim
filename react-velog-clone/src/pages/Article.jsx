import React from "react";
import { useLocation } from "react-router";
import Header from "../components/common/Header";
import Profile from "../components/home/Profile";
import styled from "styled-components";
import { colors } from "../libs/constants/colors";
import ArticleOption from "../components/article/ArticleOption";
import { StyledTag } from "../components/write/ArticleTag";
import ImgWrapper from "../components/common/ImgWrapper";

const Article = () => {
  const location = useLocation();
  const article = location.state;
  const { title, body, tags, thumbnail, date } = article;
  return (
    <StyledRoot>
      <Header />
      <StyledWrapper>
        <h1>{title}</h1>
        <ArticleOption article={article} />
        <StyledInformation>
          <span>김의진</span>
          <span>·</span>
          <span>{date}</span>
        </StyledInformation>
        <StyledTags>
          {tags &&
            tags.map((tag) => (
              <StyledArticleTag key={tag}>{tag}</StyledArticleTag>
            ))}
        </StyledTags>
        {thumbnail && (
          <ImgWrapper ratio="50%">
            <img src={thumbnail} alt="thumbnail" />
          </ImgWrapper>
        )}
        <StyledContents>{body}</StyledContents>
        <Profile />
      </StyledWrapper>
    </StyledRoot>
  );
};

export default Article;

const StyledRoot = styled.div`
  width: 100%;
  /* height: 100%; */
  margin: auto;
  background-color: ${colors.mainWhite};
`;

const StyledWrapper = styled.div`
  max-width: 768px;
  width: 100%;
  margin: auto;
  & > h1 {
    margin-top: 88px;
    margin-bottom: 32px;
    font-size: 36px;
    font-weight: 800;
  }
`;

const StyledInformation = styled.div`
  margin-top: 24px;
  & > span:nth-child(1) {
    color: ${colors.darkBlack};
    font-weight: bold;
  }
  & > span:nth-child(2) {
    margin: 0 8px;
  }
  & > span:nth-child(3) {
    color: ${colors.lightGray};
  }
`;

const StyledTags = styled.div`
  margin-top: 14px;
`;

const StyledArticleTag = styled(StyledTag)``;

const StyledContents = styled.div`
  margin-top: 80px;
`;
