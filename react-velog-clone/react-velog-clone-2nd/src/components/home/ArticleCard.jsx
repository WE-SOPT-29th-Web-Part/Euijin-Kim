import React from "react";
import styled from "styled-components";

const ArticleCard = ({ article }) => {
  const { id, title, body, summary, seires, tags, thumbnail, date } = article;

  return (
    <StyledRoot>
      <StyledImgWrapper>
        {thumbnail && <img src={thumbnail} alt="thumbnail" />}
      </StyledImgWrapper>
      <h3>{title}</h3>
      <p>{summary}</p>
      <StyledTags>
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </StyledTags>
      <span>{date}</span>
    </StyledRoot>
  );
};

export default ArticleCard;

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTags = styled.div``;

const StyledImgWrapper = styled.div`
  padding-top: 52%;
  position: relative;
  & > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
