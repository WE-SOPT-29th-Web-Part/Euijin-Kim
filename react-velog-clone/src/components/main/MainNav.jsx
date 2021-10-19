import React, { useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../libs/constants/colors";

const MainNav = () => {
  // 1. bottomLine을 useRef로 받아서, button이 클록될때마다, translate
  // 2. button을 useRef로 받아와서, className을 정의
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
      <button ref={btn1ref} className="active" onClick={handleClick}>
        글
      </button>
      <Link to="/series">
        <button ref={btn2ref} onClick={handleClick}>
          시리즈
        </button>
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

    button {
      width: 128px;
      height: 48px;
      text-align: center;
      line-height: 48px;
      font-size: 21px;
      color: ${colors.lightGray};
      background-color: ${colors.mainWhite};
      border: none;
      padding: 0;

      &.active {
        color: ${colors.mainGreen};
      }
    }
    button:nth-child(1).active + div {
      transform: translateX(-128px);
    }
    button:nth-child(2).active + div {
      transform: translateX(128px);
    }
  `,
  BottomLine: styled.div`
    background-color: ${colors.mainGreen};
    height: 2px;
    width: 128px;
    position: absolute;
    bottom: -48px;
    right: 50%;
    transition: transform 200ms linear;
  `,
};
