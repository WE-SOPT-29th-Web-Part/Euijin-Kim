import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../libs/constants/colors";

const HomeNav = () => {
  const [isArticleBottomLine, setIsArticleBottomLine] = useState(true);

  const handleClick = (e) => {
    switch (e.target.name) {
      case "article":
        setIsArticleBottomLine(true);
        break;
      case "series":
        setIsArticleBottomLine(false);
        break;
      default:
        break;
    }
  };
  return (
    <StyledRoot isArticleBottomLine={isArticleBottomLine}>
      <Link to="/" name="article" onClick={handleClick}>
        글
      </Link>
      <Link to="/series" name="series" onClick={handleClick}>
        시리즈
      </Link>
      <StyledBottomLine isArticleBottomLine={isArticleBottomLine} />
    </StyledRoot>
  );
};

export default HomeNav;

const StyledRoot = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 72px 0;
  position: relative;

  & > a {
    width: 128px;
    height: 48px;
    text-align: center;
    line-height: 48px;
    font-size: 21px;
    color: ${colors.lightGray};
    background-color: ${colors.mainWhite};
    border: none;
    padding: 0;
    text-decoration: none;
  }
  & > a:nth-child(1) {
    color: ${({ isArticleBottomLine }) =>
      isArticleBottomLine && colors.mainGreen};
  }

  & > a:nth-child(2) {
    color: ${({ isArticleBottomLine }) =>
      !isArticleBottomLine && colors.mainGreen};
  }
`;

const StyledBottomLine = styled.div`
  background-color: ${colors.mainGreen};
  height: 2px;
  width: 128px;
  position: absolute;
  bottom: 0;
  right: 50%;
  transition: transform 250ms ease;
  transform: ${({ isArticleBottomLine }) =>
    !isArticleBottomLine && "translateX(128px)"};
`;
