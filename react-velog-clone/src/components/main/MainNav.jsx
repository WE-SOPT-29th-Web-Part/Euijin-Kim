import React, { useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../libs/constants/colors";

const MainNav = ({ type }) => {
  const btn1ref = useRef(null);
  const btn2ref = useRef(null);
  const handleClick = (e) => {
    switch (e.target) {
      case btn1ref.current:
        btn1ref.current.classList.add("active");
        btn2ref.current.classList.remove("active");
        break;
      case btn2ref.current:
        btn2ref.current.classList.add("active");
        btn1ref.current.classList.remove("active");
        break;
      default:
        break;
    }
  };
  return (
    <Styled.Root>
      <Link
        to="/"
        ref={btn1ref}
        className={type === "main" && "active"}
        onClick={handleClick}
      >
        글
      </Link>
      <Link
        to="/series"
        ref={btn2ref}
        className={type === "series" && "active"}
        onClick={handleClick}
      >
        시리즈
      </Link>
      <Styled.BottomLine />
    </Styled.Root>
  );
};

export default MainNav;

const Styled = {
  Root: styled.nav`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 72px 0;
    position: relative;

    a {
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

      &.active {
        color: ${colors.mainGreen};
      }
    }
    a:nth-child(2).active + div {
      transform: translateX(128px);
    }
  `,
  BottomLine: styled.div`
    background-color: ${colors.mainGreen};
    height: 2px;
    width: 128px;
    position: absolute;
    bottom: 0;
    right: 50%;
  `,
};
