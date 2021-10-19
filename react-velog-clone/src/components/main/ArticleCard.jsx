import React from "react";
import styled from "styled-components";
import { colors } from "../../libs/constants/colors";

const ArticleCard = ({ item }) => {
  console.log(`item`, item);
  const { id, title, body, summary, series, tags, thumbnail, date } = item;

  return (
    <Styled.Root>
      <Styled.ImgWrapper>
        <img src={thumbnail} alt="" />
      </Styled.ImgWrapper>
      <h3>{title}</h3>
      <p>{summary}</p>
      <Styled.Tag>{tags && tags.map((tag) => <span>{tag}</span>)}</Styled.Tag>
      <span>{date}</span>
    </Styled.Root>
  );
};

export default ArticleCard;

const Styled = {
  Root: styled.article`
    width: 100%;
    color: ${colors.lightGray};
    padding-bottom: 64px;
    h3 {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 8px;
    }
    p {
      margin-bottom: 32px;
    }
    & > span {
    }
  `,
  ImgWrapper: styled.div`
    padding-top: 52.356%;
    position: relative;
    margin-bottom: 16px;
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
  Tag: styled.div`
    margin-bottom: 16px;
    & > span {
      display: inline-block;
      padding: 0 16px;
      height: 32px;
      line-height: 32px;
      margin-right: 14px;
      background-color: ${colors.tagGray};
      color: ${colors.subGreen};
      border-radius: 16px;
      cursor: pointer;
    }
  `,
};
