import React from "react";
import styled from "styled-components";

const ArticleCard = ({ item }) => {
  console.log(`item`, item);
  const { id, title, body, summary, series, tags, thumbnail, date } = item;

  return (
    <Styled.Root>
      <Styled.ImgWrapper>
        <img src={thumbnail} alt="" />
      </Styled.ImgWrapper>
      <h3>{title}</h3>
      <h4>{summary}</h4>
      <Styled.Tag>{tags && tags.map((tag) => <span>{tag}</span>)}</Styled.Tag>
      <span>{date}</span>
    </Styled.Root>
  );
};

export default ArticleCard;

const Styled = {
  Root: styled.article`
    width: 100%;
  `,
  ImgWrapper: styled.div`
    padding-top: 52.356%;
    position: relative;
    img {
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `,
  Tag: styled.div``,
};
