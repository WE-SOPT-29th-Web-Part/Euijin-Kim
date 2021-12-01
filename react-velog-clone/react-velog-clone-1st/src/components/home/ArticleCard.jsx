import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../libs/constants/colors";
import ImgWrapper from "../common/ImgWrapper";
import { StyledTag } from "../write/ArticleTag";

const ArticleCard = ({ article }) => {
  const { title, summary, tags, thumbnail, date } = article;

  return (
    <StyledRoot>
      <Link to={`article/${article.id}`} state={article}>
        {thumbnail && (
          <ImgWrapper ratio="56%">
            <img src={thumbnail} alt="thumbnail" />
          </ImgWrapper>
        )}
        <h3>{title}</h3>
      </Link>
      <p>{summary}</p>
      <StyledTags>
        {tags && tags.map((tag) => <StyledTag key={tag}>{tag}</StyledTag>)}
      </StyledTags>
      <span>{date}</span>
    </StyledRoot>
  );
};

export default ArticleCard;

const StyledRoot = styled.article`
  width: 100%;
  color: ${colors.lightGray};
  padding-bottom: 64px;
  h3 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 8px;
    color: ${colors.darkBlack};
  }
  p {
    margin-bottom: 32px;
  }
  & > span {
    color: ${colors.dateGray};
    font-size: 14px;
  }
`;

const StyledTags = styled.div`
  margin-bottom: 16px;
`;
